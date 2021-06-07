import React from 'react';
import ButtonMain from '../Buttons/ButtonMain';
import { Container, Row, Col, Input } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import DashboardCard from '../Dashboard/DashboardCard';
import './question.css';

const Answer = (props) => {
    return (
        <DashboardCard className="mb-3" content={
            <div>
                {props.text}
            </div>
        }>
        </DashboardCard>
    );
}

export default Answer;