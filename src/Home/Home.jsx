import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import Mediaitem from "../Mediaitem/Mediaitem";
import Game from "../Game/Game";
import { Link } from "react-router-dom";
export default function Home() {
  const [home, setHome] = useState([]);
  const [all, setAll] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [pc, setPc] = useState([]);
  const [sort, setSort] = useState([]);
  const [category, setCategory] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2e6a2b934fmsh150821d5722b5d9p152729jsn443a6a698cc3",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  async function getAllGames(mediaItem, mediaData, callback) {
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?${mediaItem}=${mediaData}`,
      options
    );
    callback(data);
    console.log(data);
  }
  useEffect(() => {
    getAllGames("", "", setAll);
  }, []);
  const getRandomElements = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomElements = getRandomElements(all, 3);
  return (
    <>
      <section className="pt-5 home-header">
        <div className="container">
          <div className="row mb-4">
            <h1 className="text-white fs-4 mt-5 text-center">
              Find &amp; track the best{" "}
              <span className="main-color">free-to-play</span> games
            </h1>
            <p className="small text-center text-muted mb-3">
              Track what you've played and search for what to play next! Plus
              get free premium loot!
            </p>
            <p className="w-auto d-flex mx-auto">
              <Link
                role="button"
                to="/games"
                className="btn btn-outline-secondary"
                href="/GameOver/games"
              >
                Browse Games
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h3 className="mb-5 mt-4">
            <FontAwesomeIcon icon={faRobot} /> Personalized Recommendations
          </h3>
          <div className="row">
            {randomElements.map((item, index) => (
              <Mediaitem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
