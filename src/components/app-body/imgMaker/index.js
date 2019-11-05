import React,{Component} from 'react';
import "./style.css"

function AppBody(props){
    return(
        <section className="card">
            <section className="img-container" >
                <img className="ImageID" onClick={() => props.checkForClick(props.id)} alt={props.id} src={props.image}/>
            </section>
            {/* <section className="content">
                <strong>Name:</strong> {props.name}
            </section>className="img-container" */}
        </section>
    );
};

export default AppBody;