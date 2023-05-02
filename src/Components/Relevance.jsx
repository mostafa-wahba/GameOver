import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Relevance() {
  const { relevance } = UseFetch();
  return (
    <>
      <Games items={relevance} />
    </>
  );
}
