import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Browser() {
  const { browser } = UseFetch();
  return (
    <>
      <Games items={browser} />
    </>
  );
}
