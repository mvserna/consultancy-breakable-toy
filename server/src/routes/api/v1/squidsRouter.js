import express from "express";

import Squid from "../../../models/Squid.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

const squidsRouter = new express.Router();

squidsRouter.get(
  "/:page",
  nextWrapper(async (req, res) => {
    const currentPage = req.params.page;
    const resultsPerPage = 10;
    const { results: squids, total } = await Squid.query().page(currentPage - 1, resultsPerPage);
    return res.json({ squids, currentPage, pageCount: total / resultsPerPage });
  })
);

export { squidsRouter };
