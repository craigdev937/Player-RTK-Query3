import React from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import { PlayerAPI } from "../global/PlayerAPI";

export const List = () => {
    const { data } = PlayerAPI.useFetchAllQuery();

    return (
        <React.Fragment>
            <header>
                <Link to="/players/add">Add Player</Link>
            </header>
            {data?.map((player) => (
                <Item
                    key={player.id}
                    player={player} 
                />
            ))}
        </React.Fragment>
    );
};





