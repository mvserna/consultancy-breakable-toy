import { BirthSignDetails } from "../../../../types/SignShape";

export class ZodiacSign {
  title: string;
  traits: string[];
  element: string;
  luckyGem: string;
  start: { month: number; day: number };
  end: { month: number; day: number };

  constructor(
    title: string,
    traits: string[],
    element: string,
    luckyGem: string,
    startAndEnd: { start: { month: number; day: number }; end: { month: number; day: number } }
  ) {
    this.title = title;
    this.traits = traits;
    this.element = element;
    this.luckyGem = luckyGem;
    this.start = startAndEnd.start;
    this.end = startAndEnd.end;
  }

  getDetails = (): BirthSignDetails => {
    return {
      title: this.title,
      traits: this.traits,
      element: this.element,
      luckyGem: this.luckyGem,
    };
  };
}
