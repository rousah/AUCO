import React from 'react';
import { Row, Col, Input } from 'reactstrap';
import { Label } from 'reactstrap';
import DashboardCard from '../Dashboard/DashboardCard';
import './question.css';

const AnswerScale = (props) => {
    return (
        <DashboardCard {...props} content={
            <div>
                <h4 className="text-center">{props.question}</h4>
                <Row>
                    {props.answers.map((val, i) => {
                        return (
                            <Col className="radioGroupBelow d-flex justify-content-center" key={i}>
                                <Label check>
                                    <Input type="radio" name="radio1" onChange={props.change} value={val}/>
                                    {val}
                                </Label>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        }>
        </DashboardCard>
    );
}

export default AnswerScale;