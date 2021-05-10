import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Switch from "react-switch";


const Form = (props) => {
    const [switchState, setSwitchState] = useState(false);

    const styleActive = {
        backgroundColor: "#c3cdff",
        marginBottom: "1rem",
        borderRadius: "7px",
        padding: "1rem",
        color: "#0d4c8b"
    };

    return (
        <div style={styleActive} className="formbutton d-flex justify-content-between">
            <div>
                {props.formName}
            </div>
            <div className="d-flex justify-content-around">
                <Switch className="me-2" onChange={setSwitchState} checked={switchState} onColor="#0d4c8b" uncheckedIcon={false} checkedIcon={false} height={14} width={35} handleDiameter={20}/>
                <div>
                    <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
}


export default Form;