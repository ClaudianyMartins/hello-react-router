import React from 'react';
import { Link } from 'react-router-dom';
import { Titulo } from './Titulo';

export const Home = () =>{
    return (
        <div className="main">
            <Titulo texto="Olá, que alegria ver você aqui!!!"/>
            <nav className="nav">
                <Link to="/react" className="nav-link margin-0">Tela React</Link>
                <Link to="/js" className="nav-link margin-0" >Tela JS</Link>
                <Link to="/hooks" className="nav-link margin-0">Tela Hooks</Link>
            </nav>
        </div>
    );
};