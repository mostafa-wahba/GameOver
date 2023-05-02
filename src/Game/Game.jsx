import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function Game({ item }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (item) {
      setIsLoading(false);
    }
  }, [item]);
  return (
    <>
      {isLoading ? (
        <div className="col-md-3">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className="col-md-3">
          <Link className="text-decoration-none text-white-50" to={`/gamedetails/${item.id}`}>
            <div className="game card mb-4 grow shadow" id={item.id}>
              <div className="game-img">
                <img className="w-100" src={item.thumbnail} />
              </div>
              <div className="game-body p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title text-truncate">{item.title}</h4>
                  <span className="badge bg-primary py-2 px-2 float-right">
                    FREE
                  </span>
                </div>
                <p className="text-muted">
                  {item.short_description.split(" ").slice(0, 4).join(" ")}...
                </p>
                <div className="d-flex justify-content-between">
                  <FontAwesomeIcon icon={faSquarePlus} />{" "}
                  <div className="d-flex mb-n2 justify-content-between align-items-center">
                    <span className="badge bg-custom2 text-dark badge-genre me-2">
                      {item.genre}
                    </span>
                    <span>
                      {item.platform == "PC (Windows)" ? (
                        <FontAwesomeIcon icon={faWindows} />
                      ) : (
                        <FontAwesomeIcon icon={faWindowMaximize} />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
