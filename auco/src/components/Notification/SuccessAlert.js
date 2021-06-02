import React from 'react';
import { Toast, ToastBody } from 'reactstrap';

const SuccessAlert = (props) => {
    // Toast style background and colours
    const toastStyle = {
        position: 'absolute',
        right: '1rem',
        backgroundColor: 'rgba(57, 174, 164, 0.7)',
        borderColor: 'rgba(61, 208, 174)',
        color: 'white'
    }

    return (
        <Toast isOpen={props.show} style={toastStyle}>
            <ToastBody>
                {props.text}
            </ToastBody>
        </Toast>
    );
}

export default SuccessAlert;