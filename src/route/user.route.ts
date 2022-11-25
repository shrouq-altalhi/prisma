import express from "express";
import {
  addContractHandler,
  getByAgeContractHandler,
  getByEmailContractHandler,
  getByIDContractHandler,
  getContractHandler,
} from "../controller/user.controller";
import validate from "../middleware/validate";
import { addUserSchema, getAgeUserSchema, getEmailUserSchema } from "../zod-schema/user.schema";

const route = express.Router();

route.get("/", getContractHandler);

route.get("/:id", getByIDContractHandler);

route.get("/:email",validate(getEmailUserSchema), getByEmailContractHandler);

route.get("/:age",validate(getAgeUserSchema), getByAgeContractHandler);



route.post("/", validate(addUserSchema), addContractHandler);

export default route;
