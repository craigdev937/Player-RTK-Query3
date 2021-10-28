import React from "react";
import { useHistory } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";
import { IPlayer } from "../models/IPlayer";

export const Add = (): JSX.Element => {
    const history = useHistory();
    const [player, setPlayer] = React.useState({} as IPlayer);
    const [addPlayer] = PlayerAPI.useAddPlayerMutation();

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await addPlayer(player);
        // After submitting
        setPlayer({} as IPlayer);
        history.push("/");
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <aside>
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={player.firstName}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={player.lastName}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={player.age}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="text"
                        name="codename"
                        placeholder="Codename"
                        value={player.codename}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <input 
                        type="text"
                        name="info"
                        placeholder="Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </aside>
                <button type="submit">Add Player</button>
            </form>
        </React.Fragment>
    );
};






