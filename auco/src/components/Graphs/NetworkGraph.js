import React from 'react';
import '../../App.css';
import { ResponsiveNetwork } from '@nivo/network';

function NetworkGraph(props) {

    console.log(props.data.links)
    const MyResponsiveNetwork = ({ data }) => (
        <ResponsiveNetwork
            nodes={data.nodes}
            links={data.links}
            repulsivity={10}
            iterations={60}
            nodeColor={function (e) { return e.color }}
            nodeBorderWidth={1}
            nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
            linkThickness={function (e) { return (e.distance) }}
            motionStiffness={160}
            motionDamping={12}
            distanceMin={30}
            linkDistance={function (e) { return (-e.distance * 10) }}
        />
    )

    return (
        <MyResponsiveNetwork data={props.data} />
    );
}


export default NetworkGraph;