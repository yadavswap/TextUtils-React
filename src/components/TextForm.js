import React,{ useState } from "react";

export default function TextForm(props) {
    const onHandleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted UpperCase !",'success')
        // console.log('onHandleUpClick Upper clicked');
    }
    const onHandleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text Converted Lowercase !",'success')

        // console.log('onHandleUpClick Upper clicked');
    }
    const onHandleClearClick= ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared !",'success')

        // console.log('onHandleUpClick Upper clicked');
    }
    const onHandleChangeClick= (event)=>{
        setText(event.target.value);
        // console.log('onHandleChangeClick clicked');
    }
    const [text, setText] = useState("");
    // console.log( useState("Enter Text For Magic"));

  return (
    <>
    <div className="conatiner" style={{backgroundColor:props.mode=== 'dark'? '#042743':'white'}}>
        <h1 style={{color:props.mode=== 'dark'? 'white':'#042743'}}>{props.heading}</h1>
      <div className="form-group">
        <textarea
        style={{backgroundColor:props.mode=== 'dark'? '#305379':'white',color:props.mode==='dark'?'white':'#042743'}}
          className="form-control" value={text}
          id="exampleFormControlTextarea1" onChange={onHandleChangeClick}
          rows="8"
        ></textarea>
        <br/>
        <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1" onClick={onHandleUpClick} >Convert To UpperCase</button>
        <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1" onClick={onHandleLoClick}>Convert To LowerCase</button>
        <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1" onClick={onHandleClearClick}> Clear Text</button>

      </div>
      <div className="container" style={{color:props.mode=== 'dark'? 'white':'#042743'}}>
        <h1>Text Summary Here</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>Reading Time For Text is {0.08 * text.split(" ").length} Mins</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text: "Enter Something preview Here"}</p>
      </div>
      </div>
    </>
  );
}
