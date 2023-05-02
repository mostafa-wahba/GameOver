import React from "react";
import UseFetch from "../UseFetch/UseFetch";
import Games from "../Games/Games";
export default function ActionRbg() {
  const { actionRpg } = UseFetch();
  return (
    <>
      <Games items={actionRpg} />
    </>
  );
}
