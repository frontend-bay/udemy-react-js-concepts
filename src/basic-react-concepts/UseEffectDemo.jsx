import {useState, useEffect} from "react";

/**
 *Use Case Scenario:
 *
 * 1) In the web page we have option to select data for page 2 or page 3, so page value
 * update in useState and useState has been used in useEffect and useEffect call the api.
 */
const UseEffectDemo = () => {


    const [count, setCount] = useState(0);

    // with empty dependency useEffect will run once when page mount.
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