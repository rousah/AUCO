import React, { useState } from 'react';
import DashboardCard from '../Dashboard/DashboardCard';
import { Input } from 'reactstrap';
import './question.css';

const Answer = (props) => {
    const [text, updateText] = useState(props.text);

    const handleChange = (e) => {
        updateText(e.target.value);
        props.add(e.target.value, e.target.name);
    }

    return (
        <DashboardCard className="mb-3" content={
            <Input type="text" name={props.number - 1} placeholder={'#' + props.number} onChange={handleChange} />
        }>
        </DashboardCard>
    );
}

export default Answer;