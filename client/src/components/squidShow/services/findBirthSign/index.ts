import { BirthSignDetails } from "../../../../types/SignShape";
import { Astrologer } from "./Astrologer";

export const findBirthSign = (dateOfBirth?: Date): BirthSignDetails => {
  if (!dateOfBirth) {
    return null;
  }
  const birthSign = Astrologer.getSignByDate(dateOfBirth);
  return birthSign.getDetails();
};
