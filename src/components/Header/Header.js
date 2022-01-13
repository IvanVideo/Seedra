import react from "react";
import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../img/logo.svg';
import face from '../../img/face.svg';
import inst from '../../img/inst.svg';
import seerch from '../../img/seerch.svg';
import heart from '../../img/heart.svg';
import bascket from '../../img/bascket.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__conteiner">
                <img src={logo} className="header__logo" />
                <nav>
                    <ul className="header__menu">
                        <Link className="header__link" to='#'><li className="header__item">ALL PRODUCTS</li></Link>
                        <div className="header__line" />
                        <Link className="header__link" to='#'><li className="header__item">ABOUT SEEDRA</li></Link>
                        <div className="header__line" />
                        <Link className="header__link" to='#'><li className="header__item">OUR BLOG</li></Link>
                        <div className="header__line" />
                        <Link className="header__link" to='#'><li className="header__item">CONTACTS</li></Link>
                    </ul>
                </nav>
                <div className="header__social social">
                    <a className="social__link" href='#'><img className="social__item" src={inst} /></a>
                    <a className="social__link" href='#'><img className="social__item" src={face} /></a>
                </div>
                <div className="header__seerch-box">
                    <input className="header__input" placeholder="Search" />
                    <img className="header__seerch" src={seerch} />
                </div>
                <div className="header__cash cash">
                    <a className="cash__link" href='#'><img className="cash__heart" src={heart} /></a>
                    <a className="cash__link" href='#'><img className="cash__bascket" src={bascket} /></a>
                </div>
            </div>
        </header>
    );
}

export default Header;