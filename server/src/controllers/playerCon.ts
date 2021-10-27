import express from "express";
import { Players } from "../models/Players";

export const CreatePlayer: express.RequestHandler =
async (req, res, next) => {
    try {
        const player: Players = new Players();
        player.firstName = req.body.firstName;
        player.lastName = req.body.lastName;
        player.age = req.body.age;
        player.codename = req.body.codename;
        player.info = req.body.info;
        await player.save();
        return res.status(201).json(player);
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const FetchAllPlayers: express.RequestHandler =
async (req, res, next) => {
    try {
        await Players.find()
        .then((players) => res.status(201).json(players));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const GetOnePlayer: express.RequestHandler =
async (req, res, next) => {
    try {
        const player: Players =
        await Players.findOneOrFail(req.params.id);
        return res.status(201).json(player);
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const UpdatePlayer: express.RequestHandler =
async (req, res, next) => {
    try {
        const player: Players =
        await Players.findOneOrFail(req.params.id);
        player.firstName = req.body.firstName;
        player.lastName = req.body.lastName;
        player.age = req.body.age;
        player.codename = req.body.codename;
        player.info = req.body.info;
        await player.save();
        return res.status(201).json("The Player was Updated!");
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const DeletePlayer: express.RequestHandler =
async (req, res, next) => {
    try {
        const player: Players =
        await Players.findOneOrFail(req.params.id);
        await player.remove();
        return res.status(201).json("The Player was Deleted!");
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};





