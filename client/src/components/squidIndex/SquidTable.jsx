import React from "react";

import { FaSync } from "react-icons/fa";
import { useQueryClient } from "react-query";

import { PaginationRow } from "./PaginationRow";
import { SquidRow } from "./SquidRow";
import "./styles/squid-table.pcss";

const squidHeadings = ["Name", "Species", "Special Power", "XP"];

export const SquidTable = ({ squidData: { squids, pageCount }, currentPage, setCurrentPage }) => {
  const queryClient = useQueryClient();
  const refetchHandler = async () => {
    await queryClient.invalidateQueries(["squids"]);
  };

  const squidHeaderComponents = squidHeadings.map((heading) => (
    <th key={heading} className="squid-table__header">
      {heading}
    </th>
  ));
  const squidRowComponents = squids.map((squid) => <SquidRow key={squid.id} squid={squid} />);

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
        <PaginationRow
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </tfoot>
    </table>
  );
};
