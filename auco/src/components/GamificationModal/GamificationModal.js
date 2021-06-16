import React, { useState, useCallback } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { useHistory } from 'react-router-dom';

const GamificationModal = (props) => {
    // Routing
    const history = useHistory();
    const goBack = useCallback(() => history.push('/home'), [history]);

    const next = () => {
        props.toggle();
        goBack();
        props.setLoading(false);
    };

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
            <ModalHeader toggle={props.toggle} close={<div></div>}>{props.headerText}</ModalHeader>
            <ModalBody>
                <div>
                    {props.confirmationText}
                </div>
            </ModalBody>
            <ModalFooter>
                <ButtonMain secondary buttonText="Seguir" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={next}></ButtonMain>
            </ModalFooter>
        </Modal >
    );
}

export default GamificationModal;