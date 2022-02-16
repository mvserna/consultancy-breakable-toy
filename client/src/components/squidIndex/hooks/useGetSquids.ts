import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const useGetSquids = (currentPage: number): UseQueryResult<SquidData> =>
  useQuery(
    ["squids", currentPage],
    () => ApiClient.get("/squids", { params: { currentPage } }).then((res) => res.data),
    { keepPreviousData: true }
  );

// PartialModelObject<RosieProfile>

// res.data.data.squids.name

// export interface QueryResponse {
//   data: SquidData;
// }

// res.data.squids, res.data.pageCount

export interface SquidData {
  squids: Squid[];
  pageCount: number;
  specialPowers: string[];
}

interface Squid {
  name: string;
  species: string;
  specialPower: string;
}
