import React from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import { PlayerAPI } from "../global/PlayerAPI";

export const List = (): JSX.Element => {
    const { data } = PlayerAPI.useFetchAllQuery();

    return (
        <React.Fragment>
            <header className="post-header">
                <Link to="/players/add/">Add Player</Link>
            </header>
            {data && data.map((player) => (
                <Item 
                    key={player.id}
                    player={player}
                />
            ))}
            {data && data.length === 0 && <aside>Add a Player</aside>}
        </React.Fragment>
    );
};





