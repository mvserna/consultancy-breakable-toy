import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";
import { SquidData } from "../../../types/SquidShape";

export const useGetSquids = (currentPage: number): UseQueryResult<SquidData> =>
  useQuery(
    ["squids", currentPage],
    () => ApiClient.get("/squids", { params: { currentPage } }).then((res) => res.data),
    { keepPreviousData: true }
  );
