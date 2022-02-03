import React from "react";

import { SquidRow } from "./SquidRow";
import "./styles/squid-table.pcss";

export const SquidTable = ({ squidData: { squids, pageCount }, currentPage, setCurrentPage }) => {
  const changePageHandler = {
    first: () => setCurrentPage(1),
    previous: () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1),
    select: (e) => setCurrentPage(e.currentTarget.value),
    next: () => setCurrentPage(currentPage < pageCount ? currentPage + 1 : pageCount),
    last: () => setCurrentPage(pageCount),
  };

  const pageOptions = [...Array(pageCount)].map((e, i) => <option value={i + 1}>{i + 1}</option>);

  const squidHeaderComponents = ["Name", "Species", "Special Power", "XP"].map((heading) => (
    <th className="squid-table__header">{heading}</th>
  ));
  const squidRowComponents = squids.map((squid) => <SquidRow key={squid.id} squid={squid} />);
  const squidPaginationButtons = Object.keys(changePageHandler).map((key) => {
    if (key === "select") {
      return (
        <select
          className="squid-table__footer-select"
          value={currentPage}
          onChange={changePageHandler.select}
        >
          {pageOptions}
        </select>
      );
    }
    return (
      <button type="button" className="squid-table__footer-button" onClick={changePageHandler[key]}>
        {key}
      </button>
    );
  });

  return (
    <table className="squid-table">
      <thead>
        <tr>{squidHeaderComponents}</tr>
      </thead>
      <tbody>{squidRowComponents}</tbody>
      <tfoot>
        <tr>
          <td className="squid-table__footer" colSpan="4">
            {squidPaginationButtons}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
