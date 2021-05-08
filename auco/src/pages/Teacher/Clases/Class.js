import React from 'react';
import { useParams } from "react-router-dom";
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import ClassButton from '../../../components/Buttons/ClassButton'
import CreateClassButton from '../../../components/Buttons/CreateClassButton'
import { Container, Row, Col } from 'reactstrap';
import { getClass } from '../../../services/getClass';
import { useState, useEffect } from 'react';

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
            Class: {id}
        </div>
    );
}

export default Class;