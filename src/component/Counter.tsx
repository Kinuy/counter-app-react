import {useEffect, useState} from "react";


export default function Counter() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)



    useEffect(() => {
        document.title = `Count: ${count} , Color: ${color}`;





    },[count, color]);

    useEffect(() => {

        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED")

        document.title = `Size: ${width} x ${height}`;
        //cleanup function
        return ()=>{
            // SOME CLEANUP CODE
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVED")
        }
    }, [width, height]);

    function addCount() {
        setCount(c => c + 1);
    }

    const subtractCount = () =>{
        setCount(c => c - 1);
    }

    const changeColor = () =>{

        setColor(c => c === "green" ? 'red' : 'green');
    }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}