import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Fantasy() {
  const { fantasy } = UseFetch();
  return (
    <>
      <Games items={fantasy} />
    </>
  );
}
