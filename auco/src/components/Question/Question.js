import React from 'react';
import ButtonMain from '../Buttons/ButtonMain';
import { Container, Row, Col } from 'reactstrap';
import AnswerScale from './AnswerScale';
import Answer from './Answer';
import DashboardCard from '../Dashboard/DashboardCard';
import './question.css';

const Question = (props) => {
    return (
        props.scale ?
            <div>
                <AnswerScale question="Algún compañero/a me ha pegado o golpeado para hacerme daño de verdad"></AnswerScale>
            </div>
            :
            <div>
                <h4 className="text-center">Cuando has respondido a las preguntas anteriores, ¿en quién estabas pensando?</h4>
                <Answer text="En un compañero especialmente"></Answer>
                <Answer text="En una compañera especialmente"></Answer>
                <Answer text="En un compañero especialmente, acompañado de un grupo de amigos/as que le apoyan"></Answer>
                <Answer text="En una compañera especialmente, acompañada de un grupo de amigos/as que le apoyan"></Answer>
                <Answer text="En varios compañeros/as que son un grupo de amigos"></Answer>
            </div>
    );
}

export default Question;