import React from 'react';
import { Link } from 'react-router-dom';

import reactImage from './img/react.png';
import { Titulo } from './Titulo';

export const ReactPage = () =>(
    <div className="main">
        <Titulo texto="Olá, você está na tela React!"/>
        <img className="imagem" src={reactImage} alt="Imagem representando react"/>
        <Link to="/home" className="nav-link margin-0">Ir para Home</Link>
    </div>
);