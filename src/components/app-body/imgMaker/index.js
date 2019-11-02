import React,{Component} from 'react';
import "./style.css"

function AppBody(props){
    return(
        <section className="card">
            <section classname="img-container">
                <img className="ImageID" id={props.id} alt={props.name} src={props.image}/>
            </section>
            {/* <section className="content">
                <strong>Name:</strong> {props.name}
            </section> */}
        </section>
    );
};

export default AppBody;