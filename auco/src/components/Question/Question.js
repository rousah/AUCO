import React from 'react';
import AnswerScale from './AnswerScale';
import Answer from './Answer';
import './question.css';

const Question = (props) => {
    const number = props.qNumber;
    const change = (e) => {
        const data = {};
        data[number] = e.currentTarget.value;

        console.log(data);
        props.onChangeSelection(data)
    }

    return (
        props.choice == "multiple choice" ?
            <div>
                <h4 className="text-center">{props.question}</h4>
                {props.description != undefined ?
                    <span> {props.description} </span>
                    : <span></span>
                }
                {
                    props.answers.map((val, i) => {
                        return (
                            <Answer key={i} text={val}></Answer>
                        )
                    })
                }
            </div >
            :
            <div>
                <AnswerScale className="mt-3" question={props.question} answers={props.answers} {...props} change={change}></AnswerScale>
            </div>
    );
}

export default Question;