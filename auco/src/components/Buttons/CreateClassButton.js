import React, { useState } from 'react';
import { Row } from 'reactstrap';
import CreateClassModal from '../CreateClassModal';

const CreateClassButton = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
        <div style={style} onClick={toggle}>
            <div>
                <Row>
                    <h3 className="p-0 fw-light">+ Crear otra clase</h3>
                </Row>
            </div>
            <CreateClassModal isOpen={modal} toggle={toggle} className={className} modal={modal}/>
        </div>

    );
}


export default CreateClassButton;