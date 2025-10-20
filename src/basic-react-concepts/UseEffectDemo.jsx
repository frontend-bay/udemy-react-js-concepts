import {useState, useEffect} from "react";

const UseEffectDemo = () => {


    const [count, setCount] = useState(0);

    useEffect( () => {
        console.log('UseEffectDemo hai');
        return () => {
            console.log('component unmount');
        }
    }, [])

    useEffect( () => {
        if (count> 0) {
            console.log('component updated ', count);
        }
    }, [count])


    return (
        <>
            Count: {count}
            <button onClick={() => setCount(count + 1)}></button>
        </>
    )
}

export default UseEffectDemo;