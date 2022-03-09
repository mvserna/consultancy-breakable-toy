import React, { FC } from "react";

import { Link } from "react-router-dom";

import { Squid } from "../../types/SquidShape";

import "./styles/squid-row.pcss";

export const SquidRow: FC<{ squid: Squid }> = ({ squid }) => {
  const rowColor = parseInt(squid.id) % 2 === 0 ? "squid-table__cell--blue" : "";
  return (
    <tr>
      <td className={`squid-table__cell ${rowColor}`}>
        <Link to={`/squids/${squid.id}`}>{squid.name}</Link>
      </td>
      <td className={`squid-table__cell ${rowColor}`}>
        <Link to={`/squids/${squid.id}`}>{squid.species}</Link>
      </td>
      <td className={`squid-table__cell ${rowColor}`}>
        <Link to={`/squids/${squid.id}`}>{squid.specialPower}</Link>
      </td>
      <td className={`squid-table__cell ${rowColor}`}>
        <Link to={`/squids/${squid.id}`}>{squid.xp}</Link>
      </td>
    </tr>
  );
};
