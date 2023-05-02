import axios from "axios";
import Game from "../Game/Game";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import UseFetch from "../UseFetch/UseFetch";

export default function Games({items}) {
  const {moreGames,more}= UseFetch()
  return (
    <>
      <div className="container pt-4">
        <div className="row">
          {items.slice(0, more).map((item, index) => (
            <Game key={index} item={item} />
          ))}
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <button
              onClick={moreGames}
              className="btn btn-more btn-outline-secondary my-3"
            >
              More Games <FontAwesomeIcon icon={faAngleRight}/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
