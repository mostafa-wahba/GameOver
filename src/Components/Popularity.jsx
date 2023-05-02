import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Popularity() {
  const { popularity } = UseFetch();
  return (
    <>
      <Games items={popularity} />
    </>
  );
}
