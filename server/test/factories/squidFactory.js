// eslint-disable-next-line import/no-unresolved
import { formatISO } from "date-fns";
import Faker from "faker";
import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";

const randomIndex = (array) => Math.floor(Math.random() * array.length);

const getRandomSpecies = () => {
  const squidSpecies = [
    "giant squid",
    "colossal squid",
    "glass squid",
    "firefly squid",
    "flying squid",
    "bobtail squid",
    "vampire squid",
    "cock-eyed squid",
    "Humboldt squid",
  ];
  return squidSpecies[randomIndex(squidSpecies)];
};

const getRandomSpecialPower = () => {
  const squidPowers = [
    "camouflage",
    "high IQ",
    "beak protrusion",
    "bloodlessness",
    "bonelessness",
    "lunglessness",
    "jet propulsion",
    "ink jet",
    "bioluminescence",
    "multiple hearts",
    "counter-illumination",
  ];
  return squidPowers[randomIndex(squidPowers)];
};

const getRandomBirthDate = () => {
  const startDate = Date.UTC(1980, 0, 1);
  const endDate = Date.UTC(2022, 0, 1);
  const rawDate = startDate + Math.random() * (endDate - startDate);
  return formatISO(new Date(rawDate), { representation: "date" });
};

Factory.define("Squid", Squid)
  .sequence("id")
  .attr("name", Faker.name.firstName)
  .attr("species", getRandomSpecies)
  .attr("specialPower", getRandomSpecialPower)
  .attr("birthDate", getRandomBirthDate);

export { Factory };
