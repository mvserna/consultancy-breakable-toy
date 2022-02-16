import React from "react";

import "./styles/squid-row.pcss";

export const SquidRow = ({ squid }) => {
  const rowColor = squid.id % 2 === 0 ? "squid-table__cell--blue" : "";
  return (
    <tr>
      <td className={`squid-table__cell ${rowColor}`}>{squid.name}</td>
      <td className={`squid-table__cell ${rowColor}`}>{squid.species}</td>
      <td className={`squid-table__cell ${rowColor}`}>{squid.specialPower}</td>
      <td className={`squid-table__cell ${rowColor}`}>{squid.xp}</td>
    </tr>
  );
};
