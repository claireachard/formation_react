import React, {useState} from 'react'
import './Button.css'
import PropTypes from 'prop-types'


//export default()=>{
const Button=(props)=>{
    const [clicked, setclicked] = useState(false)
    return (
        <button className={clicked?'Button clicked':'Button'}
        type={props.type}
        style={{backgroundColor:props.bgColor, ...props.style}}
        onClick={(evt)=>{
            props.onClickEvent('bla bla');
            setclicked(true);
            setTimeout(() => {
                setclicked(false)
            }, 250);
        }}
        >{props.children}</button>
    );
};

Button.propTypes={
    children:PropTypes.any.isRequired,
    bgColor:PropTypes.string,
    style:PropTypes.object,
    onClickEvent:PropTypes.func.isRequired,
};

Button.defaultProps={
    children:'default button value',
    bgColor: 'orange',
    onClickEvent:()=>{}
};

export default Button;