import React from "react";
import { Link } from "react-router-dom";

export default function Mediaitem({item}) {
  return (
    <>
            <div className="col-md-4">
              <Link
            className="text-decoration-none text-white-50"
            to={`/gamedetails/${item.id}`}
          >
      <div className="game card mb-4 grow shadow" id={item.id}>
        <div className="game-img">
          <img
            className="w-100"
            src={item.thumbnail}
          />
        </div>
        <div className="game-body p-3 d-flex justify-content-between align-items-center">
            <h4 className="card-title text-truncate">{item.title}</h4>
            <span className="badge bg-primary py-2 px-2 float-right">FREE</span>
        </div>
      </div>
      </Link>
      </div>
    </>
  );
}
