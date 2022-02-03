import express from "express";

import Squid from "../../../models/Squid.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const currentPage = req.query.currentPage;
    const resultsPerPage = 10;

    const specialPowers = await Squid.query()
      .whereNotNull("specialPower")
      .distinct("specialPower")
      .then((results) => results.map((result) => result.specialPower));

    const { results: squids, total } = await Squid.query()
      .orderBy("createdAt", "desc")
      .page(currentPage - 1, resultsPerPage);

    return res.json({
      squids,
      currentPage,
      pageCount: Math.ceil(total / resultsPerPage),
      specialPowers,
    });
  })
);

squidsRouter.post(
  "/",
  nextWrapper(async (req, res) => {
    try {
      const newSquid = await Squid.query().insertAndFetch({ ...req.body, xp: 0 });
      return res.status(201).json({ newSquid });
    } catch (errors) {
      return res.status(500).json({ errors });
    }
  })
);

export { squidsRouter };
