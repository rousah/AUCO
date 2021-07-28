import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Switch from "react-switch";
import FormSettingsModal from './FormSettingsModal';

const Form = (props) => {
    const [form, setForm] = useState(props.formInfo);

    const [checked, setChecked] = useState(form.active);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const styleActive = {
        backgroundColor: "#f7f7f7",
        marginBottom: "1rem",
        borderRadius: "7px",
        padding: "1rem"
    };

    const changeActive = (active) => {
        setChecked(active);
        let formSettings = form;
        formSettings["active"] = active;
        setForm(formSettings);
    }

    return (
        <div style={styleActive} className="formbutton d-flex justify-content-between">
            <div>
                {form.name}
            </div>
            <div className="d-flex justify-content-around align-items-center">
                <Switch className="me-2" onChange={changeActive} checked={checked} onColor="#fdbf4d" offColor="#e2e2e2" uncheckedIcon={false} checkedIcon={false} height={12} width={30} handleDiameter={18} offHandleColor="#f89f1e" onHandleColor="#f89f1e" />
                <FontAwesomeIcon icon={faCog} onClick={toggle} style={{ cursor: "pointer" }}></FontAwesomeIcon>
            </div>
            <FormSettingsModal isOpen={modal} toggle={toggle} modal={modal} form={form} changeForm={setForm} setChecked={setChecked}/>
        </div>
    );
}


export default Form;