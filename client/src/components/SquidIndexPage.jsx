import React from "react";

import { useQuery } from "react-query";

import { ApiClient } from "../backend/ApiClient";
import { SquidTile } from "./SquidTile";
import "./styles/squid-index.pcss";

export const SquidIndexPage = () => {
  const squidInfo = useQuery("squids", () => ApiClient.get("/squids").then((res) => res.data));

  if (squidInfo.isSuccess) {
    const squidComponents = squidInfo.data.squids.map((squid) => (
      <SquidTile key={squid.id} squid={squid} />
    ));
    return (
      <ul className="squid-table">
        <li className="squid-table__header">Name</li>
        <li className="squid-table__header">Species</li>
        <li className="squid-table__header">Special Power</li>
        <li className="squid-table__header">XP</li>
        {squidComponents}
      </ul>
    );
  }
  return <h2>Hello from React!</h2>;
};
