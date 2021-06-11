import React from 'react';
import { Col } from 'reactstrap';
import Circle from 'react-circle';
import { NavLink as RRNavLink, Link } from 'react-router-dom';

const QuestionnaireButton = (props) => {
    const styleMain = {
        boxShadow: '0px 4px 0px 0px #a3b2ff',
        backgroundColor: "#c3cdff",
        borderRadius: '16px',
        cursor: 'pointer',
        color: 'white',
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        padding: '10px 10px 10px 10px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5px'
    };

    return (
        <Link className="d-flex text-center" style={styleMain} tag={RRNavLink} to={{ pathname: "/questionnaire/" + props.questionnaire.id_questionnaire}}>
            <Col className="me-1 ms-1" xs={4}>
                <Circle
                    animate={true} // Boolean: Animated/Static progress
                    size={70} // Number: Defines the size of the circle.
                    lineWidth={50} // Number: Defines the thickness of the circle's stroke. 
                    progress={63} // Number: Update to change the progress and percentage.
                    progressColor="#3956f7"  // String: Color of "progress" portion of circle.
                    bgColor="#a5b0fb" // String: Color of "empty" portion of circle.
                    textColor="#ffffff" // String: Color of percentage text color.
                    responsive={true}
                    textStyle={{
                        font: '7rem "Baloo 2", Helvetica, sans-serif' // CSSProperties: Custom styling for percentage.
                    }}
                    percentSpacing={0} // Number: Adjust spacing of "%" symbol and number.
                    roundedStroke={true} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
                <h5 className="m-0 fw-light">Cuestionario {props.questionnaire.name}</h5>
            </Col>
        </Link>
    );
}

export default QuestionnaireButton;