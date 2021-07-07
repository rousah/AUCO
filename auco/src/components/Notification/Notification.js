import React from 'react';
import '../../App.css';
import { UncontrolledAlert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Notification(props) {
    return (
        <UncontrolledAlert {...props} color={props.color}>
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                {
                    props.incidencia ? <span>{props.name} ha mandado una incidencia: "{props.content}"</span> :  <span>{props.name} {props.content}</span>
                }
            </div>
         {/*   <button
                type="button"
                className="close btn-close"
                data-dismiss="alert"
                aria-label="Close"
            >
         </button> */}
        </UncontrolledAlert>
    );
}

export default Notification;