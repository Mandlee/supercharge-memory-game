import React from 'react';

const Scoreboard = props => (
    <div className="scoreboard container">
        <div className="row">
            <span className="col-4 align-middle"><span className="current-tries">Current tries:</span> {props.currentScore}</span>
            <span className="col-4 align-middle text-center best-score">Best <br/><span className="best-value">{props.highScore}</span></span>
            <div className="col-4 align-middle text-right">
                <button className="btn btn-outline-dark" onClick={() => props.startGame()}>Restart</button>
            </div>
        </div>
    </div>
);

export default Scoreboard;
