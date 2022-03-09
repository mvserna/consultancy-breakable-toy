import { getDate, getMonth } from "date-fns";

import { signsData } from "./constants/signsData";
import { ZodiacSign } from "./ZodiacSign";

export class Astrologer {
  zodiacSigns: ZodiacSign[];

  static zodiacSigns = signsData.map(
    (sign) => new ZodiacSign(sign.title, sign.traits, sign.element, sign.luckyGem, sign.range)
  );

  static getSignByDate(dateOfBirth: Date): ZodiacSign {
    const birthDay = getDate(dateOfBirth);
    const birthMonth = getMonth(dateOfBirth);
    return this.zodiacSigns.find(
      (sign) =>
        (birthMonth === sign.start.month && birthDay >= sign.start.day) ||
        (birthMonth === sign.end.month && birthDay <= sign.end.day)
    );
  }
}
