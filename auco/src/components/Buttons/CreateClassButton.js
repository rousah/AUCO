import React from 'react';
import { Row } from 'reactstrap';

const CreateClassButton = (props) => {

    const style = {
        border: '1px dashed #A3B2FF',
        borderRadius: '16px',
        borderWidth: '1px',
        boderColor: '#A3B2FF',
        borderStyle: 'dashed',
        cursor: 'pointer',
        color: '#1d2128',
        fontWeight: 'regular',
        textDecoration: 'none',
        width: '100%',
        height: '100%',
        padding: '1rem 2rem',
        position: 'relative'
    };

    return (
        <div style={style}>
            <a href="/clases/create" className="text-decoration-none text-body">
                <Row>
                    <h3 className="p-0 fw-light">+ Crear otra clase</h3>
                </Row>
            </a>
        </div>
    );
}


export default CreateClassButton;