import {
  faRightFromBracket,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
export default function Gamedetails() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoHovered, setIsVideoHovered] = useState(false); // new state variable
  let { id } = useParams();
  useEffect(() => {
    if (details) {
      setIsLoading(false);
    }
  }, [details]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2e6a2b934fmsh150821d5722b5d9p152729jsn443a6a698cc3",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  async function getGameDetails(id, callback) {
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    callback(data);
    console.log(data);
  }
  useEffect(() => {
    getGameDetails(id, setDetails);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="pac-man-con">
          <div class="pac-man"></div>
        </div>
      ) : (
        <section
          className="game-details"
          style={{
            backgroundImage: `url(https://www.freetogame.com/g/${details.id}/background.jpg)`,
          }}
        >
          <div className="layer">
            <div className="container">
              <div className="row pt-5">
                <div className="col-md-4">
                  <div>
                    <div
                      className="media position-relative mb-3"
                      onMouseOver={() => setIsVideoHovered(true)}
                      onMouseOut={() => setIsVideoHovered(false)}
                    >
                      <video
                        loop
                        muted
                        className="w-100 top-0 rounded-2 position-relative"
                        autoPlay={isVideoHovered}
                      >
                        <source
                          type="video/webm"
                          src={`https://www.freetogame.com/g/${details.id}/videoplayback.webm`}
                        />
                      </video>
                      <img
                        className="w-100 rounded-2 position-absolute top-0 game-thumbnail"
                        src={details.thumbnail}
                      />
                    </div>
                    <div className="row w-100 justify-content-between m-0 pe-0">
                      <div className="col-3 col-lg-2 m-0 p-0">
                        <span className="btn bg-custom text-white-50 mb-3 mt-3 py-2 cursor">
                          FREE
                        </span>
                      </div>
                      <div className="col me-0 pe-0">
                        <a
                          type="button"
                          name="playnow"
                          rel="nofollow"
                          target="_blank"
                          className="btn btn-primary btn-block w-100 py-2 me-0 mt-3"
                          href={details.game_url}
                        >
                          <strong>PLAY NOW </strong>
                          <FontAwesomeIcon icon={faRightFromBracket} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <h1>{details.title}</h1>
                  <h5 className="mt-3">About {details.title}</h5>
                  <p className="description">{details.description}</p>
                  <h5 className="mt-3">Minimum System Requirements</h5>
                  <ul className="list-unstyled ms-2">
                    <li className="py-2">
                      <strong>graphics : </strong>
                      {details?.minimum_system_requirements?.graphics}
                    </li>
                    <li className="py-2">
                      <strong>memory : </strong>
                      {details?.minimum_system_requirements?.memory}
                    </li>
                    <li className="py-2">
                      <strong>os : </strong>
                      {details?.minimum_system_requirements?.os}
                    </li>
                    <li className="py-2">
                      <strong>processor : </strong>
                      {details?.minimum_system_requirements?.processor}
                    </li>
                    <li className="py-2">
                      <strong>storage : </strong>
                      {details?.minimum_system_requirements?.storage}
                    </li>
                  </ul>
                  <h4 className="pt-3">{details.title} Screenshots</h4>
                  <Carousel
                    showArrows={false}
                    showThumbs={false}
                    autoPlay
                    stopOnHover
                    emulateTouch
                    infiniteLoop
                    className="grab"
                  >
                    <div>
                      <img src={details?.screenshots?.[0]?.image} />
                    </div>
                    <div>
                      <img src={details?.screenshots?.[1]?.image} />
                    </div>
                    <div>
                      <img src={details?.screenshots?.[2]?.image} />
                    </div>
                  </Carousel>
                  <h2 className="mt-3">Additional Information</h2>
                  <hr className="mt-2 mb-3" />
                  <div className="row mb-3">
                    <div className="col-6 col-md-4">
                      <span className="text-muted">
                        Title
                        <br />
                      </span>
                      <p>{details.title}</p>
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">
                        Developer
                        <br />
                      </span>
                      {details.developer}
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">
                        Publisher
                        <br />
                      </span>
                      {details.publisher}
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">
                        Release Date
                        <br />
                      </span>
                      {details.release_date}
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">
                        Genre
                        <br />
                      </span>
                      {details.genre}
                    </div>
                    <div className="col-6 col-md-4">
                      <span className="text-muted">
                        Platform
                        <br />
                      </span>
                      {details.platform == "Windows" ? (
                        <span>
                          <FontAwesomeIcon icon={faWindows} />
                          {details.platform}
                        </span>
                      ) : (
                        <span>
                          <FontAwesomeIcon icon={faWindowMaximize} />
                          {details.platform}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
