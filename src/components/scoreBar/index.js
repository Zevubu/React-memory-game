import React from 'react';
import './style.css';

function ScoreBar(props){
    return(
        <nav className="navbar">
                <h2> Click the day away</h2>
                <h4>{props.CorrectCheck}</h4>
                <div className="score-box">
                    <h2>Score: {props.Score} |</h2>
                    <h2>Top Score: {props.topScore}</h2> 
                </div>  
        </nav>
    );
};

export default ScoreBar;