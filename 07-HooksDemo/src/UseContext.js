import { useContext } from "react";
import { playerContext } from "./UseState";

function UseContext() {
    // useContext can be used to acess the data in any component without consumer and provider
    const player = useContext(playerContext);
    return (
        <div>
            <h1>Using Context Hook</h1>
            <h2>{player.name} is played {player.matches} and scored {player.runs}</h2>
        </div>
    )
}
export default UseContext;