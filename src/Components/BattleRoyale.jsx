import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function BattleRoyale() {
  const { battleRoyale } = UseFetch();
  return (
    <>
      <Games items={battleRoyale} />
    </>
  );
}
