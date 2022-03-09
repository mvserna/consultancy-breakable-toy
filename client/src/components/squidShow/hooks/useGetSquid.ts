import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";
import { Squid } from "../../../types/SquidShape";

export const useGetSquid = (squidId: string): UseQueryResult<Squid> =>
  useQuery(["squid", squidId], () =>
    ApiClient.get(`squids/${squidId}`).then((res) => res.data.squid)
  );
