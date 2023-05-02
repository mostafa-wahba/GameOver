import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Racing() {
  const { racing } = UseFetch();
  return (
    <>
      <Games items={racing} />
    </>
  );
}
