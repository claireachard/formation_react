import React from 'react'
import './Button.css'

//export default()=>{
const Button=(props)=>{
    console.log(props);
    return (
        <button className="Button" >{props.text}</button>
    );
}

export default Button;