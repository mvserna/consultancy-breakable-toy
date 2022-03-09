import { useMutation, UseMutationResult } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";
import { Squid } from "../../../types/SquidShape";

export const usePostSquids = (): UseMutationResult<Squid> =>
  useMutation((reqSquid: Squid) => ApiClient.post("/squids", reqSquid).then((res) => res.data));
