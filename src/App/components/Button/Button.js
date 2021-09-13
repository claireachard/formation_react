import React from 'react'
import './Button.css'

//export default()=>{
const Button=(props)=>{
    console.log(props);
    return (
        <button className="Button" type={props.type}>{props.children}</button>
    );
}

export default Button;