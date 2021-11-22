import React from "react";
import { Link } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";
import { Item } from "./Item";

export const List = (): JSX.Element => {
    const { data: players } = 
        PlayerAPI.useFetchAllPlayersQuery();

    return (
        <React.Fragment>
            <header className="post-header">
                <Link to="/players/add/">Add Player</Link>
            </header>
            {players?.map((player) => (
                <Item 
                    key={player.id}
                    player={player}
                />
            ))}
            {players?.length === 0 && <aside>Add a Player</aside>}
        </React.Fragment>
    );
};





