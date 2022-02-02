import React from "react";

import { useQuery } from "react-query";

import { ApiClient } from "../backend/ApiClient";
import { SquidTile } from "./SquidTile";
import "./styles/squid-index.pcss";

export const SquidIndexPage = () => {
  const {
    data: squidData,
    isLoading: isSquidQueryLoading,
    isSuccess: isSquidQuerySuccess,
  } = useQuery("squids", () => ApiClient.get("/squids").then((res) => res.data));

  if (isSquidQueryLoading) {
    return <h4>Standby while squids are summoned...</h4>;
  }
  if (isSquidQuerySuccess) {
    const squidComponents = squidData.squids.map((squid) => (
      <SquidTile key={squid.id} squid={squid} />
    ));
    return (
      <table className="squid-table">
        <thead>
          <th className="squid-table__header">Name</th>
          <th className="squid-table__header">Species</th>
          <th className="squid-table__header">Special Power</th>
          <th className="squid-table__header">XP</th>
        </thead>
        <tbody>{squidComponents}</tbody>
      </table>
    );
  }
  return <h4>Oh no! Squid error!</h4>;
};
