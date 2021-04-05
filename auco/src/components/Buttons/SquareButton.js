import React from 'react';
import '../../App.css';
import './SquareButton.css';

const SquareButton = (props) => {

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
        justifyContent: 'center',
        marginBottom: '4px'
    };

    const styleSecondary = {
        textDecoration: 'none',
        boxShadow: '0px 4px 0px 0px #a3b2ff',
        backgroundColor: "#c3cdff",
        borderRadius: '16px',
        cursor: 'pointer',
        color: 'white',
        marginBottom: '4px',
        width: '14%',
    };

    return (
        <a href={props.href} style={props.secondary ? styleSecondary : styleMain} className={props.className + " p-0"} id="box">
            <div id="square"></div>
            <div id="content" className="p-3 d-flex flex-column justify-content-center">
                <img src={props.illustration} alt={props.alt} className="w-100"></img>
                <h5>{props.buttonText}</h5>
            </div>
        </a>
    );
}


export default SquareButton;