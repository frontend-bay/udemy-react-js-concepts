import {useRef} from "react";

/**
 * UseRef update the value without re-rendering the page.
 */
const UseRefDemo = () => {
    const inputRef = useRef(null);

    const submit = () => {
        console.log('UseRefDemo hai ', inputRef.current);
        console.log(inputRef.current.value);
        inputRef.current.style.backgroundColor = 'red';
    }
    return (
        <div>
            <h2>useRef Demo</h2>

            <input type="text"
            placeholder="type something"
            ref={inputRef}/>

            <button onClick={submit}>Submit</button>
        </div>
    )

}

export default UseRefDemo;