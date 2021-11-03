import React from "react";
import { useHistory } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";

export const Edit = ({match}: any): JSX.Element => {
    const history = useHistory();
    const playerID = match.params.id;
    const [player, setPlayer] = React.useState({
        id: 0, firstName: "", lastName: "", age: 0, 
        codename: "", info: ""
    });

    const [updatePlayer] = PlayerAPI.useUpdateMutation();
    const { data: playerData, isSuccess: playerDataReady } = 
        PlayerAPI.useGetOneQuery(playerID);

    React.useEffect(() => {
        if (playerDataReady) {
            setPlayer(playerData!);
        }
    }, [playerData, playerDataReady]);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit =  
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // editPlayer(player)
        await updatePlayer(player);
        setPlayer({
            id: 0, firstName: "", lastName: "", age: 0, 
            codename: "", info: ""
        });
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
                        name="Info"
                        placeholder="Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </aside>
                <button type="submit">Update Player</button>
            </form>
        </React.Fragment>
    );
};





