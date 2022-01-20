import { Factory } from "../../../test/factories/Factory.js";
import { Squid } from "../../models/index.js";
import "../../../test/factories/factories.js";

class SquidSeeder {
  static async seed() {
    const squidFactory = new Factory(Squid);
    await squidFactory.createMany(50);
  }
}

export default SquidSeeder;
