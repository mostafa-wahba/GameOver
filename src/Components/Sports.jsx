import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Sports() {
  const { sports } = UseFetch();
  return (
    <>
      <Games items={sports} />
    </>
  );
}
