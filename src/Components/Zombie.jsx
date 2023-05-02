import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Zombie() {
  const { zombie } = UseFetch();
  return (
    <>
      <Games items={zombie} />
    </>
  );
}
