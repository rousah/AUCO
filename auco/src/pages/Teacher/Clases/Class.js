import React from 'react';
import { useParams } from "react-router-dom";
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import ClassButton from '../../../components/Buttons/ClassButton'
import CreateClassButton from '../../../components/Buttons/CreateClassButton'
import { Container, Row, Col } from 'reactstrap';
import { getClasses } from '../../../services/getClass';
import { useState, useEffect } from 'react';

const Class = (props) => {
    let { id } = useParams();

    return (
        <div>
            <NavBarTeacher clases></NavBarTeacher>
            Class: {id}
        </div>
    );
}

export default Class;