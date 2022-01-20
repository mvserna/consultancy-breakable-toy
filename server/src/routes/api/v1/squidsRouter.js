import express from "express";

import Squid from "../../../models/Squid.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const squids = await Squid.query();
    return res.json({ squids });
  })
);

export default squidsRouter;
