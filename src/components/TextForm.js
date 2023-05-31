import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    const [inputValue, setInputValue] = useState('');

    function handleSearch(e) {
        // here you can get the inputValue
        console.log(text.search(inputValue.toString()));


    }

    const UpClick = () => {
        // console.log('Upper case button was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const LowClick = () => {
        // console.log('Upper case button was clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }

    const ClearClick=()=>{
        let newText='';
        setText(newText);
    }

    const HandleonChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleChange = (event1) => {
        setInputValue(event1.target.value);
    }

    return (
        <>

            <div style={{ color: props.mode === "dark" ? "#e47ddb" : "black" }}>
                <div className="Container" style={{ color: props.mode === "dark" ? "#e47ddb" : "black" }}>
                    <h1 className='my-2'>{props.heading}</h1>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "#121212" : "white", color: props.mode === "dark" ? "#e47ddb" : "black" }} onChange={HandleonChange} id="myBox" rows="8"></textarea>
                </div>
                
                <button className="btn btn-primary my-2 " onClick={UpClick} style={{ backgroundColor: props.mode === "dark" ? "#121212" : "white",color: props.mode === "dark" ? "#e47ddb" : "black" }} ><strong>Convert to Uppercase</strong></button>
                <button className="btn btn-primary my-2 mx-5" onClick={LowClick} style={{ backgroundColor: props.mode === "dark" ? "#121212" : "white",color: props.mode === "dark" ? "#e47ddb" : "black" }} ><strong>Convert to Lowercase</strong></button>
                <button className="btn btn-primary my-2 mx-5" onClick={ClearClick} style={{ backgroundColor: props.mode === "dark" ? "#121212" : "white",color: props.mode === "dark" ? "#e47ddb" : "black" }} ><strong>Clear</strong> </button>
                <input type="text" onChange={handleChange} style={{ backgroundColor: props.mode === "dark" ? "#121212" : "white",color: props.mode === "dark" ? "#e47ddb" : "black" }} ></input>
                <button className="btn btn-primary my-2 mx-2" onClick={handleSearch} style={{ backgroundColor: props.mode === "dark" ? "#121212" : "white",color: props.mode === "dark" ? "#e47ddb" : "black" }} ><strong>Search</strong></button>
            </div>
           
            <div className="container my-4" style={{ color: props.mode === "dark" ? "#e47ddb" : "black" }}>
                <h2>Text summary :- </h2>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.length} characters  </p>
                <h2>Preview of your text is : </h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
                <h4>Your searched text is at location <b>{text.search(inputValue.toString())}</b> </h4>

            </div>

        </>

    )
}
