import { useEffect, useState } from "react";


function UseEffect() {
    //State Hooks
    const [width, setWidth] = useState({ width: window.innerWidth });
    const [count, setCount] = useState({ number: 10 });

    useEffect(
        () => {
            console.log("Hook...did mount... for count change")
            //can be used to read the data from the json server
        }, [count]//This array will be used so that when the count changes call this component
    )
    useEffect(
        () => {
            console.log("hook : for window resize")
            const t = () => {
                setWidth(
                    (prev) => ({
                        ...prev, width: width.width
                    })
                )
            }
            window.addEventListener('resize', t)
            //similar to componenetUnmount
            return (
                console.log("hook : did unmount")

            );
        }, [width]

    )
    function Count() {
        setCount(
            (prevstate) => ({
                ...prevstate, number: count.number + 1
            })
        );
    }

    return (
        <div>
            <h1>Useeffect Demo</h1>
            <h2>Count is {count.number} and width is{width.width}</h2>
            <button onClick={Count}>Count</button>
        </div>
    )
}
export default UseEffect;