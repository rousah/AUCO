import React from 'react';
import '../../App.css';

const DashboardCard = (props) => {

    const styleMain = {
        width: '100%',
        boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
        borderRadius: "7px",
        padding: "1rem"
    };

    return (
        <div {...props} style={Object.assign(styleMain, props.style)} className={props.className + " dashboardCard"} >
            {
                props.customHeader ?
                    props.customHeader
                    :
                    props.title ?

                        <h4>{props.title}</h4>
                        :
                        null
            }
            {props.content}
        </div>
    );
}


export default DashboardCard;