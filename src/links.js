import React from 'react';
import './App.css';
import twitter from './assets/twitter.png';
import wordpress from './assets/wp.png';
import github from './assets/github.png';


export default function Links() {
    return (
        <div className="img-links">
            <a href="https://github.com/Soph32"><img id="gh" src={github} alt="twitter logo"/></a>
            <a href="https://sophsdevdiary.wordpress.com/"><img id="wp" src={wordpress} alt="twitter logo"/></a>
            <a href="https://twitter.com/Soph322"><img id="tw" src={twitter} alt="twitter logo"/></a>
        </div>
    )
}