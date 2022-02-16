import { useMutation } from "react-query";

import { ApiClient } from "../../../backend/ApiClient";

export const usePostSquids = () =>
  useMutation((reqSquid) => ApiClient.post("/squids", reqSquid).then((res) => res.data));
