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
        padding: '1rem 1rem 1rem 0rem ',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1rem'
    };

    return (
        <Link className="d-flex text-center" style={styleMain} tag={RRNavLink} to={{ pathname: "/questionnaire/sexism"}}>
            <Col className="me-3">
                <Circle
                    animate={true} // Boolean: Animated/Static progress
                    size={70} // Number: Defines the size of the circle.
                    lineWidth={50} // Number: Defines the thickness of the circle's stroke. 
                    progress={63} // Number: Update to change the progress and percentage.
                    progressColor="#3956f7"  // String: Color of "progress" portion of circle.
                    bgColor="#a5b0fb" // String: Color of "empty" portion of circle.
                    textColor="#ffffff" // String: Color of percentage text color.
                    textStyle={{
                        font: '7rem "Baloo 2", Helvetica, sans-serif' // CSSProperties: Custom styling for percentage.
                    }}
                    percentSpacing={0} // Number: Adjust spacing of "%" symbol and number.
                    roundedStroke={true} // Boolean: Rounded/Flat line ends
                    showPercentage={true} // Boolean: Show/hide percentage.
                    showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
                <h3 className="m-0 fw-light">Sexismo</h3>
            </Col>
        </Link>
    );
}

export default QuestionnaireButton;