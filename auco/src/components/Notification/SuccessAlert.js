import React from 'react';
import { Toast, ToastBody } from 'reactstrap';

const SuccessAlert = (props) => {
    // Toast style background and colours
    const toastStyle = {
        position: 'absolute',
        right: '1rem',
        backgroundColor: 'rgba(57, 174, 164, 0.7)',
        border: '0',
        color: 'white'
    }

    const toastErrorStyle = {
        position: 'absolute',
        right: '1rem',
        backgroundColor: 'rgba(250, 45, 45, 0.7)',
        border: '0',
        color: 'white'
    }

    return (
        <Toast isOpen={props.show} style={props.error ? toastErrorStyle : toastStyle}>
            <ToastBody>
                {props.text}
            </ToastBody>
        </Toast>
    );
}

export default SuccessAlert;