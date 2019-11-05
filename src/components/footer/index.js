import React,{Component} from 'react';
import './style.css';


function Footer(props){
    return(
        <div className="footer">
            <h2>Name: {props.name}</h2>
            <h2>Artist: {props.Artist}</h2>
            <div className="link-box">
                <h2>Visit site: </h2>
                <h2><a href={props.location}> {props.location}</a></h2>
                
            </div>
        </div>
    );
};

export default Footer;