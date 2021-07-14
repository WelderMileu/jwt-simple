import { Router } from "express";
import bootstrap from "./middleware/authenticate";

const Route = Router();

Route.get("/", bootstrap.index);
Route.post("/login", bootstrap.authenticate);

export default Route;
