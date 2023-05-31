import React from "react";
import "./click.css"
const Click = () => {
    const [number, setNumber] = React.useState(1)
    const [text, setText] = React.useState("Guy")
    const [one, setOne] = React.useState(1)

    function random() {
        let ran = Math.floor(Math.random() * 100);
        setNumber(ran)
    }

    function plus() {
        setText(text + "y");
        setOne(one + 1);
    }

    React.useEffect(() => {
        console.log("change your name")
    }, [text]);

    return (
        <div className="click">
        <p>Welcome Cool {text}!</p>
        <p>Your lucky number is {number}</p>
        <p>Name has changed {one} times</p>
        <button className="btn" onClick={plus}>Change name</button>
        <button className="btn" onClick={random}>Get New Lucky Number</button>
        </div>
    );
};

export default Click;