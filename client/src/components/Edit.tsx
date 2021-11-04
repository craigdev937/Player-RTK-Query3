import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { PlayerAPI } from "../global/PlayerAPI";

export const Edit = ({match}: any): JSX.Element => {
    const history = useHistory();
    const playerID = match.params.id;
    const [player, setPlayer] = React.useState({
        id: playerID, firstName: "", lastName: "", 
        age: 0, codename: "", info: ""
    });

    const { data: playerData, 
        isSuccess: playerDataReady } = 
            PlayerAPI.useGetOneQuery(playerID);

    const [deletePlayer, { 
        isLoading: isDeleting, isSuccess: isDeleted 
    }] = PlayerAPI.useDeleteMutation();

    const [editPlayer, { 
        isLoading: isUpdating, isSuccess: isSaved 
    }] = PlayerAPI.useUpdateMutation();

    React.useEffect(() => {
        if (playerDataReady) {
            setPlayer(playerData!);
        }
    }, [playerData, playerDataReady]);

    function goBack(time: number) {
        setTimeout(() => {
            history.push("/players/");
        }, time);
    };

    const removePlayer = () => {
        deletePlayer(playerID);
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
        editPlayer(player);
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
                        placeholder="First name"
                        value={player.firstName}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName"
                        placeholder="Last name"
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
                    <button 
                        onClick={removePlayer}
                        >{isDeleting ? "Deleting..." : "Delete"}
                    </button>
                    <button 
                        type="submit"
                        >{isUpdating ? "Saving...": "Save"}
                    </button>
                </footer>
                {isSaved && (
                    <div 
                        className="alert alert-primary"
                        >Player Saved. redirecting...
                    </div>
                )}
                {isDeleted && (
                    <div 
                        className="alert alert-danger"
                        >Player Deleted. redirecting...
                    </div>
                )}
            </form>
        </React.Fragment>
    );
};





