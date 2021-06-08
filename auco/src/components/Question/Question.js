import React from 'react';
import AnswerScale from './AnswerScale';
import Answer from './Answer';
import './question.css';

const Question = (props) => {
    return (
        props.choice ?
            <div>
                <h4 className="text-center">{props.question}</h4>
                <Answer text="En un compañero especialmente"></Answer>
                <Answer text="En una compañera especialmente"></Answer>
                <Answer text="En un compañero especialmente, acompañado de un grupo de amigos/as que le apoyan"></Answer>
                <Answer text="En una compañera especialmente, acompañada de un grupo de amigos/as que le apoyan"></Answer>
                <Answer text="En varios compañeros/as que son un grupo de amigos"></Answer>
            </div>
            :
            <div>
                <AnswerScale question={props.question} answers={props.answers}></AnswerScale>
            </div>
    );
}

export default Question;