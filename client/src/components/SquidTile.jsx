import React from "react";

export const SquidTile = ({ squid }) => {
  const rowColor = squid.id % 2 === 0 ? "squid-table__square--blue" : "";
  return (
    <>
      <li className={`squid-table__square ${rowColor}`}>{squid.name}</li>
      <li className={`squid-table__square ${rowColor}`}>{squid.species}</li>
      <li className={`squid-table__square ${rowColor}`}>{squid.specialPower}</li>
      <li className={`squid-table__square ${rowColor}`}>{squid.xp}</li>
    </>
  );
};
