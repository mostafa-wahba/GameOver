import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Social() {
  const { social } = UseFetch();
  return (
    <>
      <Games items={social} />
    </>
  );
}
