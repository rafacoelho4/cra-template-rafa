import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div id="home">
            <h1>Bem vindo!</h1>
            <h2>Entre em <span>Home.js</span> para criar um app incrível!</h2>
            <a href="http://github.com/rafacoelho4" target="_blank" rel="noopener noreferrer">
                Me acompanhe no Github ❤
            </a>
        </div>
    );
}

export default Home;