import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function Action() {
  const { action } = UseFetch();
  return (
    <>
      <Games items={action} />
    </>
  );
}
