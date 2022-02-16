import React from "react";

import { FaSync } from "react-icons/fa";
import { useQueryClient } from "react-query";

import { SquidRow } from "./SquidRow";
import "./styles/squid-table.pcss";

const squidHeadings = ["Name", "Species", "Special Power", "XP"];

export const SquidTable = ({ squidData: { squids, pageCount }, currentPage, setCurrentPage }) => {
  const queryClient = useQueryClient();
  const refetchHandler = async (): Promise<void> => {
    await queryClient.invalidateQueries(["squids"]);
  };

  const changePageHandler = {
    first: () => setCurrentPage(1),
    previous: () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1),
    select: (e) => setCurrentPage(e.currentTarget.value),
    next: () => setCurrentPage(currentPage < pageCount ? currentPage + 1 : pageCount),
    last: () => setCurrentPage(pageCount),
  };

  const pageOptions = [...Array(pageCount)].map((e, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));

  const squidHeaderComponents = squidHeadings.map((heading) => (
    <th key={heading} className="squid-table__header">
      {heading}
    </th>
  ));
  const squidRowComponents = squids.map((squid) => <SquidRow key={squid.id} squid={squid} />);
  const squidPaginationButtons = Object.keys(changePageHandler).map((key) => {
    if (key === "select") {
      return (
        <select
          key={key}
          className="squid-table__footer-select"
          value={currentPage}
          onChange={changePageHandler.select}
        >
          {pageOptions}
        </select>
      );
    }
    return (
      <button
        key={key}
        type="button"
        className="squid-table__footer-button"
        onClick={changePageHandler[key]}
      >
        {key}
      </button>
    );
  });

  return (
    <table className="squid-table">
      <thead>
        <tr>
          <th className="squid-table__header-refetch" colSpan="4">
            <button className="squid-table__header-button" type="button" onClick={refetchHandler}>
              <FaSync />
            </button>
          </th>
        </tr>
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
