import React from 'react';
import './App.css';

export default function Scroll(props) {
    return (
        <div>
            <h3 className="scroll">{props.toSection}</h3>
            <h3>&#709;</h3>
        </div>
    )
}