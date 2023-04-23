    import React, { useState } from "react";

    export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Handle Event clicked by user" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase.", "success");
    };
    
    //for lowerCase
    
    const handleLoClick = () => {
        // console.log("Handle Event clicked by user" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase.", "success");
    };
    
    //for clearing text
    const handleClearClick = () => {
        // console.log("Handle Event clicked by user" + text);
        let newText = "";
        setText(newText);
        props.showAlert("text cleared!", "success");
    };
    
    //aa onchange event thi aapde textarea ma typing kari sakiae chhe
    
    const handleOnChange = (event) => {
        // console.log("handle On Change");
        setText(event.target.value);
    };

    //for copy text

    const handleCopy = () => {
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    };
    
    //for remove extra space
    
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!", "success");
    };

    //speak the text by google
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        const toggle = document.getElementById("toggle");
        if (toggle.textContent === "Speak") {
        toggle.innerHTML = "Stop";
        } else {
        toggle.innerHTML = "Speak";
        if ((toggle.innerHTML = "Speak")) {
            window.speechSynthesis.cancel();
        }
        }
    };

    const [text, setText] = useState("Enter Text Here");

    // text = "new state"; wrong way to change the value of text

    // setText("new text");  correct way to change the text

    return (
        <>
        <div className="container">
            <div className="mb-3">
            <h1>{props.heading}</h1>

            <textarea
                className="form-control outline"
                value={text}
                onChange={handleOnChange}
                id="myBox"
                rows="8"
            ></textarea>

            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
                Convert to Uppercase
            </button>

            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
                Convert to LowerCase
            </button>

            <button
                className="btn btn-primary mx-2 my-2"
                onClick={handleClearClick}
            >
                Clear All Text
            </button>

            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
                CopyText
            </button>

            <button
                className="btn btn-primary mx-2 my-2"
                onClick={handleExtraSpace}
            >
                Remove Extra Space
            </button>

            <button
                className="btn btn-primary mx-2 my-2"
                onClick={speak}
                id="toggle"
            >
                Speak
            </button>
            </div>
        </div>

        <div className="container my-4">
            <h1>Your text Summary</h1>

            <p>
            {text.split(" ").length} words and {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
    }
