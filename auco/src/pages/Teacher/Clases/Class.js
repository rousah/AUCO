import React from 'react';
import { useParams } from "react-router-dom";
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import { Container, Row, Col } from 'reactstrap';
import { getClass } from '../../../services/getClass';
import { useState, useEffect } from 'react';
import Loading from '../../../components/Loading'

const Class = (props) => {
    let { id } = useParams();

    const [myClass, setClass] = useState(null);
    useEffect(() => {
        async function getMyClasses() {
            const myClass = await getClass(id).then(response => {
                // if get class success
                if (response) {
                    console.log(response);
                    return response;
                }
            });
            setClass(myClass);
        }
        getMyClasses();
    }, [])

    return (
        <div>
            <NavBarTeacher clases></NavBarTeacher>
            {
                myClass ?
                    <Container>
                        <Row className="p-3 justify-content-between mt-3 mb-4">
                            <Col xs="4" className="p-0 d-flex align-items-center">
                                <h2>
                                    {myClass.name + " " + myClass.year}
                                </h2>
                            </Col>
                        </Row>
                    </Container>
                    :
                    <Loading></Loading>
            }
        </div>
    );
}

export default Class;