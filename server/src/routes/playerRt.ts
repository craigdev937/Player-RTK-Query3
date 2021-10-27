import express from "express";
import { HomeIndex } from "../controllers/playerCon";

export const playerRt: express.Router = express.Router();
    playerRt.get("/", HomeIndex);




