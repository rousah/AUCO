import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Switch from "react-switch";
import FormSettingsModal from './FormSettingsModal';

const Form = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [switchState, setSwitchState] = useState(false);

    const styleActive = {
        backgroundColor: "#f7f7f7",
        marginBottom: "1rem",
        borderRadius: "7px",
        padding: "1rem"
    };

    const formInfo = {
        name: props.formName
    }

    return (
        <div style={styleActive} className="formbutton d-flex justify-content-between">
            <div>
                {formInfo.name}
            </div>
            <div className="d-flex justify-content-around align-items-center">
                <Switch className="me-2" onChange={setSwitchState} checked={switchState} onColor="#fdbf4d" offColor="#e2e2e2" uncheckedIcon={false} checkedIcon={false} height={12} width={30} handleDiameter={18} offHandleColor="#f89f1e" onHandleColor="#f89f1e" />
                <FontAwesomeIcon icon={faCog} onClick={toggle} style={{cursor: "pointer"}}></FontAwesomeIcon>
            </div>
            <FormSettingsModal isOpen={modal} toggle={toggle} modal={modal} form={formInfo}/>
        </div>
    );
}


export default Form;