import { renderHook } from "@testing-library/react-hooks";

import { useFindBirthSign } from "../useFindBirthSign";

describe("a custom hook wrapped to return zodiac information", () => {
  const date = new Date(2022, 0, 1);
  it("should return null when no parameter is passed in", () => {
    const { result } = renderHook(() => useFindBirthSign());
    expect(result.current).toBeNull();
    expect(result.current).toBeDefined();
  });

  it("should return a BirthSignDetails object", () => {
    const { result } = renderHook(() => useFindBirthSign(date));
    expect(result.current).toEqual({
      title: "Capricorn",
      traits: ["Detail-oriented", "Intelligent", "Hardworking"],
      element: "Earth",
      luckyGem: "Lapis lazuli",
    });
  });
});
