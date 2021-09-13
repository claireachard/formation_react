import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'


//export default()=>{
const Button=(props)=>{
    console.log(props);
    return (
        <button className="Button" type={props.type}>{props.children}</button>
    );
};

Button.propTypes={
    children:PropTypes.string.isRequired
}

export default Button;