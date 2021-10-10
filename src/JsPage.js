import React from 'react';
import { Link } from 'react-router-dom';

import jsImage from './img/js.png';
import { Titulo } from './Titulo';

export const JsPage = () =>(
    <div className="main">
        <Titulo texto="Olá, você está na tela JS!"/>
        <img className="imagem" src={jsImage} alt="Imagem representando js"/>
        <Link to="/home" className="nav-link margin-0">Ir para Home</Link>
    </div>
);