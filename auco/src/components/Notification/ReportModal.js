import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { postReport } from '../../services/sendReport';
import Loading from '../../components/Loading';
import useToken from '../../services/useToken';

const ReportModal = (props) => {
    const [loading, setLoading] = useState(false);
    const { currentUser } = useToken();
    const report = {
        id_student: currentUser._id,
        name: currentUser.name + " " + currentUser.surname,
        incident: true,
        details: ""
    }

    const [formSettings, setFormSettings] = useState(report);

    /* Style for text with border */
    const styleBorder = {
        border: '1px solid #E3E3E3',
        borderLeft: '5px solid #f89f1e',
        padding: '1rem',
        borderRadius: '4px'
    }

    const handleChange = (e) => {
        setFormSettings({
            id_student: currentUser._id,
            name: currentUser.name + " " + currentUser.surname,
            incident: true,
            details: e.currentTarget.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show loading animation
        setLoading(true);

        // Send formsettings report to server
        postReport(formSettings, currentUser.id_class).then(response => {
            // if send report success
            if (response) {
                props.toggleToast();
                console.log(response);
                setLoading(false);
                props.toggle();
            }
            else {
                props.toggleError();
                setLoading(false);
                props.toggle();
            }

        });
    };

    const closeBtn = <ButtonMain buttonText={<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>} className="px-2 py-1 rounded-3" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className + " formsettings"} >
            <ModalHeader toggle={props.toggle} close={closeBtn}>Reportar Incidente</ModalHeader>
            <ModalBody style={{ minHeight: '50vh' }}>
                <p className="fs-6" style={styleBorder}>
                    ¿Has visto alguna situación negativa en clase o en el colegio que te ha llamado la atención? ¿Hay algún problema que te preocupa y te gustaría avisar o hablarlo con tu profesor? <br></br>Escribe lo que quieras en el cuadro de texto, y se le enviará un mensaje a tu profesor.
                </p>
                {
                    loading ?
                        <Loading text="Enviando incidencia..."></Loading>
                        :
                        <FormGroup>
                            <Label for="exampleText">Incidente:</Label>
                            <Input type="textarea" name="text" id="exampleText" rows={5} onChange={handleChange} />
                        </FormGroup>
                }
            </ModalBody>
            {
                loading ? <span></span>
                    :
                    <ModalFooter>
                        <ButtonMain buttonText="Enviar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={handleSubmit}></ButtonMain>
                        <ButtonMain secondary buttonText="Cancelar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>
                    </ModalFooter>
            }
        </Modal>
    );
}

export default ReportModal;