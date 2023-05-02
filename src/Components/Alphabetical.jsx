import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Alphabetical() {
  const { alphabetical } = UseFetch();
  return (
    <>
      <Games items={alphabetical} />
    </>
  );
}
