import React from "react";
import { Link } from "react-router-dom";
import { Player } from "./Player";
import { PlayerAPI } from "../global/PlayerAPI";

export const List = (): JSX.Element => {
    const { data: players } = PlayerAPI.useFetchAllPlayersQuery();

    return (
        <React.Fragment>
            <header className="post-header">
                <Link to="/players/add/">Add Player</Link>
            </header>
            {players && players.map((player) => (
                <main key={player.id}>
                    <h3>{player.firstName} {player.lastName}</h3>
                    <p>Age: {player.age}, Codename: {player.codename}</p>
                    <p>{player.info}</p>
                </main>
            ))}
            {players?.length === 0 && <aside>Add a Player</aside>}
        </React.Fragment>
    );
};





