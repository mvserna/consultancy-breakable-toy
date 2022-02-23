import { getDate, getMonth } from "date-fns";

import { BirthSignDetails } from "../../../types/SignShape";
import { ZodiacSign } from "./ZodiacSign";

const zodiacSigns: ZodiacSign[] = [
  new ZodiacSign("Aries", ["Ambitious", "Independent", "Impatient"], "Fire", "Diamond", {
    start: { month: 2, day: 21 },
    end: { month: 3, day: 19 },
  }),
  new ZodiacSign("Taurus", ["Dependable", "Musical", "Practical"], "Earth", "Emerald", {
    start: { month: 3, day: 20 },
    end: { month: 4, day: 20 },
  }),
  new ZodiacSign("Taurus", ["Dependable", "Musical", "Practical"], "Earth", "Emerald", {
    start: { month: 3, day: 20 },
    end: { month: 4, day: 20 },
  }),
  new ZodiacSign("Gemini", ["Curious", "Affectionate", "Kind"], "Air", "Tiger's Eye", {
    start: { month: 4, day: 21 },
    end: { month: 5, day: 20 },
  }),
  new ZodiacSign(
    "Cancer",
    ["Intuitive", "Emotional", "Intelligent", "Passionate"],
    "Water",
    "Ruby",
    { start: { month: 5, day: 21 }, end: { month: 6, day: 22 } }
  ),
  new ZodiacSign("Leo", ["Proud", "Bold", "Ambitious"], "Fire", "Carnelian", {
    start: { month: 6, day: 23 },
    end: { month: 7, day: 22 },
  }),
  new ZodiacSign("Virgo", ["Graceful", "Organized", "Kind"], "Earth", "Peridot", {
    start: { month: 7, day: 23 },
    end: { month: 8, day: 22 },
  }),
  new ZodiacSign("Libra", ["Diplomatic", "Artistic", "Intelligent"], "Air", "Sapphire", {
    start: { month: 8, day: 23 },
    end: { month: 9, day: 22 },
  }),
  new ZodiacSign("Scorpio", ["Seductive", "Passionate", "Independent"], "Water", "Opal", {
    start: { month: 9, day: 23 },
    end: { month: 10, day: 21 },
  }),
  new ZodiacSign("Sagittarius", ["Adventurous", "Creative", "Strong-willed"], "Fire", "Topaz", {
    start: { month: 10, day: 22 },
    end: { month: 11, day: 21 },
  }),
  new ZodiacSign(
    "Capricorn",
    ["Detail-oriented", "Intelligent", "Hardworking"],
    "Earth",
    "Lapis lazuli",
    { start: { month: 11, day: 22 }, end: { month: 0, day: 19 } }
  ),
  new ZodiacSign("Aquarius", ["Imaginative", "Idealistic", "Intuitive"], "Air", "Amethyst", {
    start: { month: 0, day: 20 },
    end: { month: 1, day: 18 },
  }),
  new ZodiacSign("Pisces", ["Creative", "Sensitive", "Artistic"], "Water", "Moonstone", {
    start: { month: 1, day: 19 },
    end: { month: 2, day: 20 },
  }),
];

export const findBirthSign = (dateOfBirth?: Date): BirthSignDetails => {
  if (!dateOfBirth) {
    return null;
  }
  const birthDay = getDate(dateOfBirth);
  const birthMonth = getMonth(dateOfBirth);
  const birthSign = zodiacSigns.find(
    (sign) =>
      (birthMonth === sign.start.month && birthDay >= sign.start.day) ||
      (birthMonth === sign.end.month && birthDay <= sign.end.day)
  );
  return birthSign.getDetails();
};
