import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Switch from "react-switch";
import './FormSettingsModal.css';

const FormSettingsModal = (props) => {
    const [formSettings, setFormSettings] = useState(props.form);

    /* Style for text with border */
    const styleBorder = {
        border: '1px solid #E3E3E3',
        borderLeft: '5px solid #f89f1e',
        padding: '1rem',
        borderRadius: '4px'
    }

    const handleChange = (e) => {

        // For when activation method changes
        if (["method"].includes(e.target.name)) {
            setFormSettings({
                name: formSettings.name,
                activationMethod: e.currentTarget.value,
                options: formSettings.options,
                active: formSettings.active
            });
        }
        else {
            setFormSettings({
                name: formSettings.name,
                activationMethod: formSettings.activationMethod,
                options: e.currentTarget.value,
                active: formSettings.active
            });
        }
    }

    const setSwitchState = (e) => {
        setFormSettings({
            name: formSettings.name,
            activationMethod: formSettings.activationMethod,
            options: formSettings.options,
            active: e
        });
    }

    const saveSettings = (e) => {
        props.changeForm(formSettings);
        props.toggle();
    }

    const closeBtn = <ButtonMain buttonText={<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>} className="px-2 py-1 rounded-3" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className + " formsettings"} >
            <ModalHeader toggle={props.toggle} close={closeBtn}>Formulario {props.form.name}</ModalHeader>
            <ModalBody style={{ minHeight: '50vh' }}>
                <p className="fs-6" style={styleBorder}>
                    Aquí podrá indicar las distintas opciones sobre cuándo lanzar un formulario. Esto podrá ser de forma automática (cada cierto tiempo) o en una fecha concreta. Además, se puede activar o desactivar su lanzamiento tanto aquí como en la página de la clase, sin perder los ajustes.
                </p>
                <FormGroup className="d-flex align-items-center mb-3">
                    <Switch id="active" className="me-2" onChange={setSwitchState} checked={formSettings.active} onColor="#fdbf4d" offColor="#e2e2e2" uncheckedIcon={false} checkedIcon={false} height={12} width={30} handleDiameter={18} offHandleColor="#f89f1e" onHandleColor="#f89f1e" />
                    <Label for="active" className="mr-sm-2">Lanzamiento</Label>
                </FormGroup>
                <FormGroup check className="mb-3">
                    <Label check>
                        <Input type="radio" name="method" onChange={handleChange} value="automatic" checked={formSettings.activationMethod === "automatic"} />
                            Automático:
                    </Label>
                    <Input type="select" name="select" id="exampleSelect" className="form-select" disabled={formSettings.activationMethod !== "automatic"} onChange={handleChange} value={formSettings.activationMethod === "automatic" ? formSettings.options : ""}>
                        <option>Diario</option>
                        <option>Semanal</option>
                        <option>Mensual</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="method" onChange={handleChange} value="date" checked={formSettings.activationMethod === "date"} />
                            Fecha concreta:
                    </Label>
                    <Input type="date" name="date" disabled={formSettings.activationMethod !== "date"} onChange={handleChange} value={formSettings.activationMethod === "date" ? formSettings.options : ""} />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <ButtonMain buttonText="Guardar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={saveSettings}></ButtonMain>
                <ButtonMain secondary buttonText="Cancelar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>
            </ModalFooter>
        </Modal >
    );
}

export default FormSettingsModal;