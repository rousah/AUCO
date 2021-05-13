import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, CustomInput, FormText } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const initialFormData = Object.freeze({
    userId: "",
    classname: "",
    year: "",
    students: [{ name: "", surname: "" }, { name: "", surname: "" }, { name: "", surname: "" }],
    // Initially, no file is selected 
    selectedFile: null,
    withFile: 'false'
});

const FormSettingsModal = (props) => {

    const styleBorder = {
        border: '1px solid #E3E3E3',
        borderRadius: '4px',
        padding: '1rem'
    }

    const closeBtn = <ButtonMain buttonText={<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>} className="px-2 py-1 rounded-3" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className} style={{ maxWidth: '75%' }}>
            <ModalHeader toggle={props.toggle} close={closeBtn}>{props.form.name}</ModalHeader>
            <ModalBody style={{ minHeight: '50vh' }}>
                
            </ModalBody>
            <ModalFooter>
                <ButtonMain secondary buttonText="Cancelar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>
            </ModalFooter>
        </Modal >
    );
}

export default FormSettingsModal;