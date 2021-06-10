import React, { useState } from 'react';
import DashboardCard from '../Dashboard/DashboardCard';
import './question.css';

const Answer = (props) => {
    const [selected, setSelected] = useState(false);

    function select() {
        // Add to selection
        if (!selected) {
            props.add(props.text);
        }

        // Delete from selection
        else {
            props.delete(props.text);
            console.log("delete");
        }
        setSelected(!selected);
    }

    const styleSelected = {
        cursor: 'pointer',
        backgroundColor: '#d9dffc',
        userSelect: 'none',
        marginLeft: '5px'
    }

    const styleNotSelected = {
        cursor: 'pointer',
        userSelect: 'none'
    }

    return (
        <DashboardCard className="mb-3" style={selected ? styleSelected : styleNotSelected} onClick={select} content={
            <div>
                {props.text}
            </div>
        }>
        </DashboardCard>
    );
}

export default Answer;