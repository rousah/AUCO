import React from 'react';
import ButtonMain from '../Buttons/ButtonMain';
import { Container, Row, Col, Input } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import DashboardCard from '../Dashboard/DashboardCard';
import './question.css';

const AnswerScale = (props) => {
    return (
        <DashboardCard content={
            <div>
                <h4 className="text-center">{props.question}</h4>
                <Row>
                    <Col className="radioGroupBelow d-flex justify-content-center">
                        <Label check>
                            <Input type="radio" name="radio1" />
                    Nunca
                </Label>
                    </Col>
                    <Col className="radioGroupBelow d-flex justify-content-center">
                        <Label check>
                            <Input type="radio" name="radio1" />
                    Pocas veces
                </Label>
                    </Col>
                    <Col className="radioGroupBelow d-flex justify-content-center">
                        <Label check>
                            <Input type="radio" name="radio1" />
                    Muchas veces
                </Label>
                    </Col>
                    <Col className="radioGroupBelow d-flex justify-content-center">
                        <Label check>
                            <Input type="radio" name="radio1" />
                    Siempre
                </Label>
                    </Col>
                </Row>
            </div>
        }>
        </DashboardCard>
    );
}

export default AnswerScale;