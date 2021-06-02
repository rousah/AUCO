import React, { useState } from 'react';
import { Toast, ToastBody } from 'reactstrap';

const SuccessAlert = (props) => {
    // Toast
    const toastStyle = {
        position: 'absolute',
        right: '1rem',
        backgroundColor: 'rgba(57, 86, 247, 0.7)',
        border: '0',
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