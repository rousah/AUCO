import React, { useState } from 'react';
import AnswerScale from './AnswerScale';
import AnswerList from './AnswerList';
import Answer from './Answer';
import './question.css';

const Question = (props) => {
    const [selected, setSelected] = useState([]);
    const [listItems, setListItems] = useState([]);

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
        props.onChangeSelection(data);
    }

    const addToAnswers = (value) => {
        const answers = selected.concat(value);
        setSelected(answers);
        changeMultipleSelection(answers);
    }

    // For saving list answers
    const addTextToAnswers = (value, index) => {
        // Copy old list
        let items = listItems;
        // Replace value of old list
        items[index] = value;
        // Replace old list with new
        setListItems(items);

        // Send answers to questionnaire
        const data = {};
        data[number] = items;
        props.onChangeSelection(data);
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
            props.choice == "blank list" ?
                <div>
                    <h4 className="text-center">{props.question}</h4>
                    {props.description != undefined ?
                        <span> {props.description} </span>
                        : <span></span>
                    }
                    {
                        props.answers.map((val, i) => {
                            return (
                                <AnswerList key={i} number={i + 1} add={addTextToAnswers} text={val}></AnswerList>
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