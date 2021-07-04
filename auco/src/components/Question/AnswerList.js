import React, { useState } from 'react';
import DashboardCard from '../Dashboard/DashboardCard';
import { MentionsInput, Mention } from 'react-mentions'
import './question.css';

const Answer = (props) => {
    const [text, updateText] = useState("");
    const preferenceNumber = props.number +1;

    const handleChange = (e, newValue, plainValue) => {
        console.log(e)
        updateText(e.target.value);
        if (e.target.value.match(/\d/) != null) {
            props.add(plainValue, e.target.value.match(/\d/));
        }
    }

    const style = {
        margin: 0,
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        backgroundColor: '#ffffff',
        border: '1px solid #ced4da'
    }

    return (
        <DashboardCard className="mb-3" content={
            <div className="d-flex align-items-center">
                <div className="me-2">{'#' + preferenceNumber}</div>
                <MentionsInput value={text} onChange={handleChange} name={props.number} placeholder="@..." className="form-control" style={style}>
                    <Mention
                        trigger="@"
                        markup={"@[__display__]__" + props.number + "__"}
                        data={props.students}
                    />
                </MentionsInput>
            </div>
        }>
        </DashboardCard>
    );
}

export default Answer;