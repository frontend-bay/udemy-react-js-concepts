//When state changes, React re-renders components.
//Component state and Global state

import React from "react";

const OnClickAndStateDemo = () => {
    const [count, setCount] = React.useState(0);
    const clicked = (name) => {
        console.log('clicked ' + name);
    }
    return (
        <>
            <h1>count is {count}</h1>
            <button onClick={() => {
                clicked("amit")
                setCount(count + 1)
            }}>Click me!</button>
        </>
    )
}

export default OnClickAndStateDemo;