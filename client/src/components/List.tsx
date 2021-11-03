import React from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import { PlayerAPI } from "../global/PlayerAPI";

export const List = (): JSX.Element => {
    const { data } = PlayerAPI.useFetchAllPlayersQuery();

    return (
        <React.Fragment>
            <header className="post-header">
                <Link to="/players/add/">Add Player</Link>
            </header>
            {data?.map((player) => (
                <Item 
                    key={player.id}
                    id={player.id}
                    firstName={player.firstName}
                    lastName={player.lastName}
                    age={player.age}
                    codename={player.codename}
                    info={player.info}
                />
            ))}
            {data?.length === 0 && <aside>Add a Player</aside>}
        </React.Fragment>
    );
};





