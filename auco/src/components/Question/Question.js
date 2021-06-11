import React, { useState } from 'react';
import AnswerScale from './AnswerScale';
import Answer from './Answer';
import './question.css';

const Question = (props) => {
    const [selected, setSelected] = useState([]);

    // Question number
    const number = props.qNumber;

    // For saving single choice selection (radio)
    const changeSelection = (e) => {
        const data = {};
        data[number] = e.currentTarget.value;
        props.onChangeSelection(data)
    }

    // For saving multiple choice selection
    const changeMultipleSelection = (value) => {
        const data = {};
        data[number] = value;
        console.log(data);
        props.onChangeSelection(data);
    }

    const addToAnswers = (value) => {
        const answers = selected.concat(value);
        setSelected(answers);
        changeMultipleSelection(answers);
    }

    const removeFromAnswers = (value) => {

        // Filter selected to delete that item (return all that don't have the same value)
        var filtered = selected.filter(function (e) { return e !== value });

        setSelected(filtered);
        changeMultipleSelection(filtered);
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
                            <Answer key={i} text={val} add={addToAnswers} delete={removeFromAnswers}></Answer>
                        )
                    })
                }
            </div >
            :
            <div>
                <AnswerScale className="mt-3" question={props.question} answers={props.answers} {...props} change={changeSelection}></AnswerScale>
            </div>
    );
}

export default Question;