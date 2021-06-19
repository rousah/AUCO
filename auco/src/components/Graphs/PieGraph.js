import React from 'react';
import '../../App.css';
import { ResponsivePie } from '@nivo/pie';

function PieGraph(props) {
    const MyResponsivePie = ({ data }) => (
        <ResponsivePie
            data={data}
            margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            colors={{ datum: 'data.color' }}
            theme={{
                "background": "#ffffff",
                "textColor": "#333333",
                "fontSize": 11,
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 0
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": "#383838",
                            "strokeWidth": 0
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": "#edf1ff",
                        "strokeWidth": 1
                    }
                }
            }
            }
            padAngle={2}
            cornerRadius={3}
            activeOuterRadiusOffset={4}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            legends={
                [
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
        />
    )

    return (
        <MyResponsivePie data={props.data} />
    );
}


export default PieGraph;