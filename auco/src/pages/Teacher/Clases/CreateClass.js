import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faExclamationCircle, faEllipsisV, faExternalLinkAlt, faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

const CreateClass = (props) => {

    const style = {
        boxShadow: '0px 4px 5px 0px rgba(163, 178, 255, 0.59)',
        position: 'absolute',
        backgroundColor: "#ffffff",
        borderRadius: '16px',
        cursor: 'pointer',
        color: '#1d2128',
        textDecoration: 'none',
        width: '100%',
        padding: '1rem 2rem',
    };

    return (
        <div style={style}>
            hello
        </div>
    );
}


export default CreateClass;