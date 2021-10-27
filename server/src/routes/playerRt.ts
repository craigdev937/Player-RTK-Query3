import express from "express";
import { CreatePlayer, DeletePlayer, 
    FetchAllPlayers, GetOnePlayer,  
    UpdatePlayer } from "../controllers/playerCon";

export const playerRt: express.Router = express.Router();
    playerRt.post("/players", CreatePlayer);
    playerRt.get("/players", FetchAllPlayers);
    playerRt.get("/players/:id", GetOnePlayer);
    playerRt.put("/players/:id", UpdatePlayer);
    playerRt.delete("/players/:id", DeletePlayer);



