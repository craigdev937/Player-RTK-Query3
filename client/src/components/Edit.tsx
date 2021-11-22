import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";

export const Edit = (): JSX.Element => {
    const navigate = useNavigate();
    const match = useParams();
    const playerID = match.id;
    const [player, setPlayer] = React.useState({
        id: playerID, firstName: "", lastName: "", 
        age: 0, codename: "", info: ""
    });

    const { data: playerData, 
        isSuccess: playerDataReady } = 
            PlayerAPI.useGetOnePlayerQuery(playerID!);

    const [deletePlayer, {
        isLoading: isDeleting, isSuccess: isDeleted
    }] = PlayerAPI.useDeletePlayerMutation();

    const [editPlayer, {
        isLoading: isUpdating, isSuccess: isUpdated
    }] = PlayerAPI.useUpdatePlayerMutation();

    React.useEffect(() => {
        if (playerDataReady) {
            setPlayer(playerData!);
        };
    }, []);

    function goBack(time: number) {
        setTimeout(() => {
            navigate("/");
        }, time);
    };

    const removePlayer = () => {
        deletePlayer(playerID!);
        goBack(700);
    };

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await editPlayer(player);
        setPlayer({
            id: playerID, firstName: "", lastName: "", 
            age: 0, codename: "", info: ""
        });
        goBack(700);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <aside>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        name="firstName"
                        placeholder="First Name"
                        value={player.firstName}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName"
                        placeholder="Last Name"
                        value={player.lastName}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="text" 
                        name="age"
                        placeholder="Age"
                        value={player.age}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="codename">Codename</label>
                    <input 
                        type="text" 
                        name="codename"
                        placeholder="Codename"
                        value={player.codename}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="info">Info</label>
                    <input 
                        type="text" 
                        name="info"
                        placeholder="Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </aside>
                <footer>
                    <button><Link to="/">Cancel</Link></button>
                    <button onClick={removePlayer}
                        >{isDeleting ? "Deleting..." : "Delete"}
                    </button>
                    <button type="submit"
                        >{isUpdating ? "Updating..." : "Update"}
                    </button>
                </footer>
            </form>
        </React.Fragment>
    );
};





