import React from 'react';
import '../../App.css';
import { ResponsiveNetwork } from '@nivo/network';


function NetworkGraph(props) {

    let MyResponsiveNetwork;
    if (props.data) {
        MyResponsiveNetwork = ({ data }) => (
            <ResponsiveNetwork
                nodes={data.nodes}
                links={data.links}
                repulsivity={6}
                iterations={60}
                nodeColor={function (e) { return e.color }}
                nodeBorderWidth={1}
                nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                linkThickness={function (e) { return (e.distance*2) }}
                linkColor={function (e) { 
                    console.log(e);
                    if (e.distance > 0) return '#3dd0ae'
                    return '#AD3636' 
                }}
                motionStiffness={160}
                motionDamping={12}
                distanceMin={30}
            />
        )
    }

    return (
        props.data ?
            <MyResponsiveNetwork data={props.data} />
            :
            <div>No hay datos</div>
    );
}


export default NetworkGraph;