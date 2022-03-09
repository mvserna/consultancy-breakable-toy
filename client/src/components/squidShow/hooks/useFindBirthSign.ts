import { BirthSignDetails } from "../../../types/SignShape";
import { findBirthSign } from "../services/findBirthSign/index";

export const useFindBirthSign = (dateOfBirth?: Date): BirthSignDetails =>
  findBirthSign(dateOfBirth);
