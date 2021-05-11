import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Switch from "react-switch";


const Form = (props) => {
    const [switchState, setSwitchState] = useState(false);

    const styleActive = {
        backgroundColor: "#f7f7f7",
        marginBottom: "1rem",
        borderRadius: "7px",
        padding: "1rem"
        };

    return (
        <div style={styleActive} className="formbutton d-flex justify-content-between">
            <div>
                {props.formName}
            </div>
            <div className="d-flex justify-content-around align-items-center">
                <Switch className="me-2" onChange={setSwitchState} checked={switchState} onColor="#fdbf4d" offColor="#e2e2e2" uncheckedIcon={false} checkedIcon={false} height={12} width={30} handleDiameter={18} offHandleColor="#f89f1e" onHandleColor="#f89f1e" />
                <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
            </div>
        </div>
    );
}


export default Form;