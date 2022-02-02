import React, { useState } from "react";

import { useQuery } from "react-query";

import { ApiClient } from "../backend/ApiClient";
import { SquidTile } from "./SquidTile";
import "./styles/squid-index.pcss";

export const SquidIndexPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: squidData,
    isLoading: isSquidQueryLoading,
    isSuccess: isSquidQuerySuccess,
  } = useQuery(
    ["squids", currentPage],
    () => ApiClient.get(`/squids/${currentPage}`).then((res) => res.data),
    { keepPreviousData: true }
  );

  if (isSquidQueryLoading) {
    return <h4>Standby while squids are summoned...</h4>;
  }
  if (isSquidQuerySuccess) {
    const changePageHandler = {
      first: () => setCurrentPage(1),
      previous: () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1),
      select: (e) => setCurrentPage(e.currentTarget.value),
      next: () =>
        setCurrentPage(currentPage < squidData.pageCount ? currentPage + 1 : squidData.pageCount),
      last: () => setCurrentPage(squidData.pageCount),
    };

    const pageSelectOptions = [];
    for (let i = 1; i <= squidData.pageCount; i += 1) {
      pageSelectOptions.push(<option value={i}>{i}</option>);
    }

    const squidComponents = squidData.squids.map((squid) => (
      <SquidTile key={squid.id} squid={squid} />
    ));
    return (
      <table className="squid-table">
        <thead>
          <tr>
            <th className="squid-table__header">Name</th>
            <th className="squid-table__header">Species</th>
            <th className="squid-table__header">Special Power</th>
            <th className="squid-table__header">XP</th>
          </tr>
        </thead>
        <tbody>{squidComponents}</tbody>
        <tfoot>
          <tr>
            <td className="squid-table__footer" colSpan="4">
              <span className="squid-table__footer-cell" onClick={changePageHandler.first}>
                first
              </span>
              <span className="squid-table__footer-cell" onClick={changePageHandler.previous}>
                previous
              </span>
              <span className="squid-table__footer-cell">
                <select value={currentPage} onChange={changePageHandler.select}>
                  {pageSelectOptions}
                </select>
              </span>
              <span className="squid-table__footer-cell" onClick={changePageHandler.next}>
                next
              </span>
              <span className="squid-table__footer-cell" onClick={changePageHandler.last}>
                last
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
  return <h4>Oh no! Squid error!</h4>;
};
