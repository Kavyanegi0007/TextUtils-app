import React, { useState } from 'react';



export default function Child(props) {

 

  // State to manage whether to display the number or not
  const [display, setDisplay] = useState(" ");
  const [isBold, setBold ] = useState(false)
  const [isItalic, setItalic] = useState(false)
  const [isUnderline, setUnderline] = useState(false)

  const clearText = () => {
    setDisplay("");
    setBold(false);
    setItalic(false);
    setUnderline(false);
  };
  

  // Function to toggle the display of the number
  const update = (event) => {
    setDisplay( event.target.value);
  
  };
  const textUpper = () => {

    setDisplay(display.toUpperCase())

}

const textLower = ()=> {

  setDisplay(display.toLowerCase())


}

const bold = () => {

  setBold(!isBold)
    

}
const italics = () => {

  setItalic(!isItalic)
}

const underline = () => {

  setUnderline(!isUnderline)
}

  // JSX structure
  return (
    <div>
      <h3 className='text-center my-3'>{props.heading}</h3>
      <textarea  style={{ backgroundColor: props.style.backgroundColor, color: props.style.color }} className='form-control' id='myBox' onInput={update} rows='1' placeholder='enter text here'   /> {/* added style that will change color */}
      <div className="card py-5" style={{ backgroundColor: props.style.backgroundColor, color: props.style.color  ,  '::placeholder': { color: props.style.color === 'black' ? 'white' : 'black' }}}>
        <div className="card-body">
    <p style={{ fontWeight: isBold ? 'bold' : 'normal' ,  fontStyle: isItalic ? 'italic' : 'normal' , textDecoration: isUnderline ? 'underline' : 'none'} }>{display}</p>



  </div>
  
  
</div>

<div className="container-fluid ">
<p>{display.trim() ? display.trim().split(" ").length : 0} words and {display.length} characters, {display.trim().split(/\s+/).length * 0.008} minute read</p>
  

  </div>
      
  


       

<div className="btn  btn-outline-primary my-3 mx-1" onClick={textUpper} >UpperCase</div> 
<div className="btn  btn-outline-secondary my-3 mx-1" onClick={textLower} >LowerCase</div> 

<div className="btn  btn-outline-danger my-3 mx-1" onClick={bold} >Bold</div> 
<div className="btn  btn-outline-success my-3 mx-1" onClick={italics} >Italic</div> 

<div className="btn  btn-outline-secondary my-3 mx-1" onClick={underline} >Underline</div> 
<div className="btn  btn-dark my-3 mx-1" onClick={clearText} >Clear Text</div> 






</div>
  );
}
