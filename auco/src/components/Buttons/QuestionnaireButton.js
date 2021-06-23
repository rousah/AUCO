import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import Circle from 'react-circle';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { getQuestionnaire } from '../../services/getQuestionnaire';
import ReactTooltip from 'react-tooltip';

const QuestionnaireButton = (props) => {
    const [percentage, setPercentage] = useState(0);

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

    const styleDisabled = {
        boxShadow: '0px 4px 0px 0px #a3b2ff',
        backgroundColor: "#c3cdff",
        opacity: '57%',
        borderRadius: '16px',
        cursor: 'default',
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

    useEffect(() => {
        const getMyQuestionnaire = async (id) => {
            // Get questionnaire
            const thisQuestionnaire = await getQuestionnaire(id).then(response => {
                return response;
            });

            console.log(thisQuestionnaire)
            // Find the responses to this questionnaire
            const myResponse = props.responses.filter(q => q.id_questionnaire === props.questionnaire.id_questionnaire)[0];

            // If responses exist
            if (myResponse != null) {

                // Calculate percentage -> - 3 to count out ids
                let answersCount = 0;
                // Count responses
                for (var response in myResponse) {
                    if (myResponse.hasOwnProperty(response)) {
                        answersCount++;
                    }
                }
                answersCount = answersCount - 3;

                // If there are answers
                if (answersCount > 0) {
                    var p = Math.trunc(answersCount / thisQuestionnaire.questions.length * 100);
                    setPercentage(p);
                }
                else {
                    setPercentage(0);
                }
            }
        }

        getMyQuestionnaire(props.questionnaire.id_questionnaire);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
            percentage < 100 ?
                <Link className="d-flex text-center" style={styleMain} tag={RRNavLink} to={{ pathname: "/questionnaire/" + props.questionnaire.id_questionnaire }} >
                    <Col className="me-1 ms-1" xs={4}>
                        <Circle
                            animate={true} // Boolean: Animated/Static progress
                            size={70} // Number: Defines the size of the circle.
                            lineWidth={50} // Number: Defines the thickness of the circle's stroke. 
                            progress={percentage} // Number: Update to change the progress and percentage.
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
                </Link >
                :
                <div>
                    <ReactTooltip backgroundColor="#3956f7" id='completed' multiline type="info" effect="solid" className="fw-bold text-center">Ya has completado este cuestionario.<br></br> ¡Felicidades!</ReactTooltip>
                    <div className="d-flex text-center" style={styleDisabled} data-tip data-for='completed'>
                        <Col className="me-1 ms-1" xs={4}>
                            <Circle
                                animate={true} // Boolean: Animated/Static progress
                                size={70} // Number: Defines the size of the circle.
                                lineWidth={50} // Number: Defines the thickness of the circle's stroke. 
                                progress={percentage} // Number: Update to change the progress and percentage.
                                progressColor="#3956f7"  // String: Color of "progress" portion of circle.
                                bgColor="#a5b0fb" // String: Color of "empty" portion of circle.
                                textColor="#ffffff" // String: Color of percentage text color.
                                responsive={true}
                                textStyle={{
                                    font: '6.5rem "Baloo 2", Helvetica, sans-serif' // CSSProperties: Custom styling for percentage.
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
                    </div>
                </div>
    );
}

export default QuestionnaireButton;