import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import Loading from '../../components/Loading';

const ConfirmationModal = (props) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.server) {
            // Show loading animation
            setLoading(true);

            // Do action
            props.action(props.actionInfo).then(response => {
                console.log(response);
                // if create class success
                if (response) {
                    setLoading(false);
                    props.toggle()
                    window.location.reload();
                }
            });
        }
        else props.action();
    };

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
            <ModalHeader toggle={props.toggle} close={<div></div>}>{props.headerText}</ModalHeader>
            <ModalBody style={{minHeight: '400px'}}>
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