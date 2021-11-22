import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../models/IPlayer";

type Props = {
    player: IPlayer,
};

export const Item = ({player}: Props): JSX.Element => {
    return (
        <React.Fragment>
            <h2>
                <Link to={`/players/edit/${player.id}`}
                    >{player.codename}
                </Link>
            </h2>
            <main key={player.id}>
                <h3>{player.firstName} {player.lastName}</h3>
                <p>Age: {player.age}, Codename: {player.codename}</p>
                <p>{player.info}</p>
            </main>
        </React.Fragment>
    );
};




