export interface SquidData {
  squids: Squid[];
  pageCount: number;
  specialPowers: string[];
}

export interface Squid {
  name: string;
  id: string;
  species: string;
  specialPower: string;
  xp: string;
  birthDate: string;
}

export interface SquidFormValues {
  name: string;
  species: string;
  specialPower: string;
}
