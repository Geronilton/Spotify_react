import React from "react";
import './Header.css';
import smallRigth from '../assets/icons/small-right.png'
import smallLeft from  '../assets/icons/small-left.png'
import search from '../assets/icons/search.png'

const Header = () => {
    return (
        <nav class="header__navigation">
        <div class="navigation">
            <button class="arrow-left">
                <img src={smallLeft} alt="Seta esquerda" />
            </button>
            <button class="arrow-rigth">
                <img src={smallRigth} alt="Seta direita" />
            </button>
        </div>
            <div class="header__search">
                <img src={search} alt="" />
                <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
            </div>

            <div class="header__login">
                <button class="subscribe">Inscreva-se</button>
                <button class="login">Entrar</button>
            </div>                   
     </nav>
    )
};

export default Header;