import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../models/IPlayer";

export const Player = ({ player }: IPlayer): JSX.Element => {
    return (
        <React.Fragment>
            {/* <h1>
                <Link 
                    to={`players/edit/${player.id}`}
                    >{player.firstName}
                </Link>
            </h1>
            <footer>
                {player.codename}
                {player.age}
            </footer> */}
        </React.Fragment>
    );
};





