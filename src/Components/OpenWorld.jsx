import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function OpenWorld() {
  const { openWorld } = UseFetch();
  return (
    <>
      <Games items={openWorld} />
    </>
  );
}
