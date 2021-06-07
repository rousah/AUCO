import React from 'react';
import ButtonMain from '../Buttons/ButtonMain';
import { Container, Row, Col } from 'reactstrap';
import './question.css';

const Question = (props) => {
    return (
        <div>
            <h4>¿Texto pregunta?</h4>
            <div>
                <div>
                    Respuesta 1
                </div>
                <div>
                    Respuesta 2
                </div>
                <div>
                    Respuesta 3
                </div>
            </div>
        </div>
    );
}

export default Question;