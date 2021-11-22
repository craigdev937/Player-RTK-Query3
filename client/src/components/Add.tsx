import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";

export const Add = (): JSX.Element => {
    const navigate = useNavigate();
    const [addPlayer] = PlayerAPI.useAddPlayerMutation();
    const [player, setPlayer] = React.useState({
        id: "", firstName: "", lastName: "", age: 0, 
        codename: "", info: ""
    });    

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
        setPlayer({
            id: "", firstName: "", lastName: "", age: 0, 
            codename: "", info: ""
        });
        navigate("/");
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
                        type="number"
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
                <button><Link to="/">Cancel</Link></button>
                <button type="submit">Add Player</button>
            </form>
        </React.Fragment>
    );
};






