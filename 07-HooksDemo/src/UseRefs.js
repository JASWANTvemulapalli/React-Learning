import { useContext, useRef } from "react"
import { playerContext } from "./UseState"


function UseRefs() {
    const player = useContext(playerContext)

    //Using Refs created a reference variable
    const inputE1 = useRef(null);
    const k = () => {
        inputE1.current.value = "Jaswant";
    }
    return (
        <div>
            <h1>Using Ref Demo In Functional Component</h1>
            <input type='text' placeholder="your Name" ref={inputE1} />
            <button onClick={k}>Submit</button>
        </div>
    )
}

export default UseRefs