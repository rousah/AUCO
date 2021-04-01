import React from 'react';
import '../App.css';

const ButtonMain = (props) => {

    const styleMain = {
        boxShadow: '0px 4px 0px 0px #f89f1e',
        backgroundColor: "#fdbf4d",
        borderRadius: '16px',
        cursor: 'pointer',
        color: 'white',
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        padding: '0px 5px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const styleSecondary = {
        boxShadow: '0px 4px 0px 0px #a3b2ff',
        backgroundColor: "#c3cdff",
        borderRadius: '16px',
        cursor: 'pointer',
        color: 'white',
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        padding: '0px 5px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <a href={props.href} style={props.secondary ? styleSecondary : styleMain} className={props.className}>{props.buttonText}</a>
    );
}


export default ButtonMain;