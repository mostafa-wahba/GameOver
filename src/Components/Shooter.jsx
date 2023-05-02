import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Shooter() {
  const { shooter } = UseFetch();
  return (
    <>
      <Games items={shooter} />
    </>
  );
}
