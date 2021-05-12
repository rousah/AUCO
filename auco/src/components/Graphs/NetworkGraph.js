import React from 'react';
import '../../App.css';
import { ResponsiveNetwork } from '@nivo/network';

function NetworkGraph(props) {

    const MyResponsiveNetwork = ({ data /* see data tab */ }) => (
        <ResponsiveNetwork
            //data={data}
            nodes={data.nodes}
            links={data.links}
            repulsivity={6}
            iterations={60}
            nodeColor={function(e){return e.color}}
            nodeBorderWidth={1}
            nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
            linkThickness={function(e){return 2*(2-e.source.depth)}}
            motionStiffness={160}
            motionDamping={12}
        />
    )

    return (
        <MyResponsiveNetwork data={props.data} />
    );
}


export default NetworkGraph;