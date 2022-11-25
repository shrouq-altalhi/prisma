import express from "express";
import {
  addContractHandler,
  deleteContractHandler,
  getByNameContractHandler,
  getByRatingContractHandler,
  getContractHandler,
  updateContractHandler,
} from "../controller/movie.controller";
import validate from "../middleware/validate";
import {
  addMovieSchema,
  deleteMovieSchema,
  updateMovieSchema,
} from "../zod-schema/movie.schema";

const router = express.Router();

router.get("/", getContractHandler);

router.get("/:name", getByNameContractHandler);

router.get("/:rating", getByRatingContractHandler);

router.post("/", validate(addMovieSchema), addContractHandler);

router.put("/:id", validate(updateMovieSchema), updateContractHandler);

router.delete("/:id", validate(deleteMovieSchema), deleteContractHandler);

export default router;
