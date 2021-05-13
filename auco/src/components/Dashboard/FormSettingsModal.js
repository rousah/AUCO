import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './FormSettingsModal.css';

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
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className + " formsettings"} style={{ maxWidth: '25%' }}>
            <ModalHeader toggle={props.toggle} close={closeBtn}>{props.form.name}</ModalHeader>
            <ModalBody style={{ minHeight: '50vh' }}>
                <p className="fs-6 p-1">
                    Aquí podrá indicar las distintas opciones sobre cuándo lanzar un formulario. Esto podrá ser de forma automática (cada cierto tiempo) o en una fecha concreta. Además, se puede activar o desactivar su lanzamiento tanto aquí como en la página de la clase, sin perder los ajustes.
                </p>
                <FormGroup check className="mb-3">
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                            Automático:
                    </Label>
                    <Input type="select" name="select" id="exampleSelect" className="form-select" disabled>
                        <option>Diario</option>
                        <option>Semanal</option>
                        <option>Mensual</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                                Fecha concreta:
                    </Label>
                    <Input type="date" name="date" disabled />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <ButtonMain buttonText="Guardar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>
                <ButtonMain secondary buttonText="Cancelar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>
            </ModalFooter>
        </Modal >
    );
}

export default FormSettingsModal;