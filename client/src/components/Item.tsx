import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../models/IPlayer";

type Player = {
    player: IPlayer,
};

export const Item = ({ player }: Player): JSX.Element => {
    return (
        <React.Fragment>
            <Link to={`/players/edit/${player.id}`}>{player.firstName}</Link>
            <h1>Item</h1>
            <main key={player.id}>
                <h3>{player.firstName} {player.lastName}</h3>
                <p>Age: {player.age}, Codename: {player.codename}</p>
                <p>{player.info}</p>
            </main>
        </React.Fragment>
    );
};





