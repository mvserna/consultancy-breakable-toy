import { useQuery } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const useGetSquids = (currentPage) =>
  useQuery(
    ["squids", currentPage],
    () => ApiClient.get("/squids", { params: { currentPage } }).then((res) => res.data),
    { keepPreviousData: true }
  );
