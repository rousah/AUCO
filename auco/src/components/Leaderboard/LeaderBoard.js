import React from 'react';
import '../../App.css';
import Leaderboard from 'react-leaderboard';
import DashboardCard from '../Dashboard/DashboardCard';
import './Leaderboard.css';

function LeaderBoard(props) {
    const leaderboardHeaderStyle = {
        backgroundColor: "#3dd0ae",
        margin: "-1rem -1rem 0 -1rem",
        borderRadius: "7px 7px 0px 0px",
        padding: "1rem",
        color: "#ffffff"
    }
    console.log(props.users)

    return (
            <DashboardCard className="leaderboardCol" customHeader={
                <h4 className="text-center" style={leaderboardHeaderStyle}> Leaderboard</h4>
            }
                content={
                    <Leaderboard users={props.users} paginate={30} />
                }
            >
            </DashboardCard>
    );
}

export default LeaderBoard;