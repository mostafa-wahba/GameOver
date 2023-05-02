import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Fight() {
  const { fight } = UseFetch();
  return (
    <>
      <Games items={fight} />
    </>
  );
}
