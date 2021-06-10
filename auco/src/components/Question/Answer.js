import React, { useState } from 'react';
import ButtonMain from '../Buttons/ButtonMain';
import { Container, Row, Col, Input } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import DashboardCard from '../Dashboard/DashboardCard';
import './question.css';

const Answer = (props) => {
    const [selected, setSelected] = useState(false);

    function select () {
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