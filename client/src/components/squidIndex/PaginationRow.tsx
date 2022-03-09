import React, { FC } from "react";

import { squidHeadings } from "./SquidTable";

export const PaginationRow: FC<{
  pageCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ pageCount, currentPage, setCurrentPage }) => {
  const changePageHandler = {
    first: (): void => setCurrentPage(1),
    previous: (): void => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1),
    select: (e: React.BaseSyntheticEvent): void => setCurrentPage(e.currentTarget.value),
    next: (): void => setCurrentPage(currentPage < pageCount ? currentPage + 1 : pageCount),
    last: (): void => setCurrentPage(pageCount),
  };

  const pageOptions = [...Array(pageCount)].map((e, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));

  const paginationButtons = Object.keys(changePageHandler).map((key) => {
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
    <tr>
      <td className="squid-table__footer" colSpan={squidHeadings.length}>
        {paginationButtons}
      </td>
    </tr>
  );
};
