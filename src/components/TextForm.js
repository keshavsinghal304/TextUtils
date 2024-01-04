import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Uppercase!","success")
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to lowercase!","success")
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

    const handleClear = () =>{
        setText("");
        props.showAlert("Text Cleared!","success")

    }

    const handleCopy = () =>{       
        navigator.clipboard.writeText(text);        
        props.showAlert("Copied to Clipboard!","success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspace Removed!","success")
    }


    return (

        <>
        
        <div className="Container" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange}
                 style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white',color: props.mode=== 'dark'?'white':'#042743'}}   value={text} id="textid" rows="8"></textarea>
            </div>
            <button type="button" disabled={text.length===0}  onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
            <button type="button" disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
            <button type="button" disabled={text.length===0} onClick={handleClear} className="btn btn-primary mx-2 my-2">Clear Text</button>
            <button type="button" disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy Text</button>
            <button type="button" disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Romove Extra Spaces</button>

        </div>

        <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview ! "}</p>

        </div>
        
        </>
    )
}
