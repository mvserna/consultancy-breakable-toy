/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.alterTable("squids", (t) => {
    t.renameColumn("specialPower", "specialPowerOld");
  });
  await knex.schema.alterTable("squids", (t) => {
    t.enu("specialPower", [
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
    ]);
  });
  await knex.raw(`UPDATE :squids: SET :specialPower:=:specialPowerOld:`, {
    squids: "squids",
    specialPower: "specialPower",
    specialPowerOld: "specialPowerOld",
  });
  return knex.schema.alterTable("squids", (t) => {
    t.dropColumn("specialPowerOld");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.alterTable("squids", (t) => {
    t.string("specialPower").alter();
  });
};
