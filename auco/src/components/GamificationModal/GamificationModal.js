import React, { useCallback } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { useHistory } from 'react-router-dom';
import LottieAnimation from "../../Lottie";
import presentAnim from '../../assets/animations/present.json';

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
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className} centered>
            <ModalBody className="position-relative">
                <LottieAnimation lotti={presentAnim} height={300} width={300} className="position-absolute top-0 start-50 translate-middle" />
                <div style={{ height: '0px', paddingBottom: '25%' }}></div>
                <div className="text-center display-6 fw-bold">
                    ¡Felicidades!<br></br>
                    Has ganado<br></br>
                    <span className="fw-bold text-teal m-0 p-0 tw-animate-pulse" style={{ fontSize: '9rem', lineHeight: '8rem' }}>
                        {props.points}
                    </span><br></br>
                    puntos con este cuestionario
                </div>
                <div className="d-flex justify-content-center mt-5 tw-animate-bounce">
                    <ButtonMain buttonText="RECOGER PUNTOS" className="px-5 rounded-5 py-1" fontWeight="600" fontSize="20px" onClick={next}></ButtonMain>
                </div>
            </ModalBody>
        </Modal >
    );
}

export default GamificationModal;