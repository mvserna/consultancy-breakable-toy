import React, { FC, useState } from "react";

import { useGetSquids } from "./hooks/useGetSquids";
import { SquidForm } from "./SquidForm";
import { SquidTable } from "./SquidTable";

export const SquidIndexPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: squidData,
    isLoading: isSquidQueryLoading,
    isSuccess: isSquidQuerySuccess,
  } = useGetSquids(currentPage);

  if (isSquidQueryLoading) {
    return <h4>Standby while squids are summoned...</h4>;
  }
  if (isSquidQuerySuccess) {
    return (
      <>
        <SquidForm specialPowers={squidData.specialPowers} />
        <SquidTable
          squidData={squidData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  }
  return <h4>Oh no! Squid error!</h4>;
};
