import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ player }) => {
    return (
        <React.Fragment>
            <article>
                <h2>
                    <Link 
                        to={`/players/edit/${player.id}`}
                        >{player.codename}
                    </Link>
                </h2>
                <p>{player.firstName} {player.lastName}</p>
                <p>{player.age}</p>
                <p>{player.info}</p>
            </article>
        </React.Fragment>
    );
};





