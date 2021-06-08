import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { postClass } from '../../services/createClass';
import useToken from '../../services/useToken';
import Loading from '../../components/Loading';

const ConfirmationModal = (props) => {
    const { userId } = useToken();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show loading animation
        setLoading(true);

        // Do action
        props.action().then(response => {
            // if create class success
            if (response) {
                console.log(response);
                setLoading(false);
                props.toggle()
                window.location.reload();
            }
        });
    };

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
            <ModalHeader toggle={props.toggle} close={<div></div>}>{props.headerText}</ModalHeader>
            <ModalBody>
                {
                    loading ?
                        <Loading text={props.loadingText}></Loading>
                        :
                        <div>
                            {props.confirmationText}
                        </div>
                }
            </ModalBody>
            {
                loading ? <span></span>
                    :
                    <ModalFooter>
                        <ButtonMain buttonText={props.actionText} className="px-2 rounded-4 me-3 py-1" fontWeight="500" fontSize="18px" onClick={handleSubmit}></ButtonMain>
                        <ButtonMain secondary buttonText="Cancelar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>
                    </ModalFooter>
            }
        </Modal >
    );
}

export default ConfirmationModal;