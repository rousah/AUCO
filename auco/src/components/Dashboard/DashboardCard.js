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

    const styleHeader = {

    }

    return (
        <div style={styleMain} className="dashboardcard">
            {
                props.customHeader ?
                    props.customHeader
                    :
                    props.title ?

                        <h4 style={styleHeader}>{props.title}</h4>
                        :
                        null
            }
            {props.content}
        </div>
    );
}


export default DashboardCard;