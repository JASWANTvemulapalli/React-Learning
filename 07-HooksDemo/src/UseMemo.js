import { useMemo, useState } from "react";

function Prime(value) {
    var prime = [];
    console.log("In calculate Prime Function");
    for (let i = 2; i <= value; i++) {

        let flag = 0;
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            if (j == 1 || j == i) {
                continue;
            }
            else if (i % j == 0) {
                flag = 1;
                break;
            }
            else {
                continue;
            }
        }
        if (flag == 0) {
            prime.push(i);
            prime.push('-');
        }
        flag = 0;
    }
    return prime;
}





function UseMemo() {
    const [count1, setCount1] = useState({ count: 5 });
    const [count2, setCount2] = useState({ count: 10 });
    const Increment1 = () => {
        setCount1(
            { count: 11 }
        )

    }
    const Increment2 = () => {
        setCount2(
            {
                count: count2.count + 1
            }

        )
    }

    return (
        <div>
            <h1>UseMemo Demo</h1><hr />
            <button onClick={Increment1}>Counter1</button>
            <button onClick={Increment2}>Counter2</button>
            <hr />
            <h1>First Counter</h1>
            <Counter count={count1.count}></Counter><hr />
            <h1>Second Counter</h1>
            <Counter count={count2.count}></Counter>
        </div>
    )

}
function Counter(props) {
    //const answer = Prime(props.count);
    //Using useMemo
    const answer = useMemo(() => Prime(props.count), [props.count])

    return (
        <div>
            <h2>The Prime Numbers of {props.count} are : {answer}</h2>
        </div>
    )
}

export default UseMemo;