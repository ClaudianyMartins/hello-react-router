import React from 'react';
import { Link } from 'react-router-dom';

import hooksImage from './img/hooks.png';
import { Titulo } from './Titulo';

export const HooksPage = () =>(
    <div className="main">
        <Titulo texto="Olá, você está na tela Hooks!"/>
        <img className="imagem" src={hooksImage} alt="Imagem representando hooks"/>
        <Link to="/home" className="nav-link margin-20">Ir para Home</Link>
    </div>
);