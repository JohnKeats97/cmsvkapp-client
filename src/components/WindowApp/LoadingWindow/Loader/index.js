import React from 'react'

import './style.css';


export default (props) => {
    return <div id="circleG" style={props.style} className={props.className}>
        <div id="circleG_1" className="circleG" style={props.styleCircle} />
        <div id="circleG_2" className="circleG" style={props.styleCircle} />
        <div id="circleG_3" className="circleG" style={props.styleCircle} />
    </div>
};
