import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import childrenIllustration from '../assets/illustrations/round.png';

const LandingPage = (props) => {

    return (
        <div class="landing">
            <NavBar></NavBar>
            <div class="content">
                <img src={childrenIllustration} alt="happy children in a field"></img>
                Empezar aquí lorem ipsum
                <Button color="primary" size="lg">EMPEZAR</Button>
                <Button color="primary" size="lg">Ya tengo una cuenta</Button>
                <span>SABER MÁS <FontAwesomeIcon icon={faLongArrowAltDown} /></span>
            </div>
        </div>
    );
}

export default LandingPage;