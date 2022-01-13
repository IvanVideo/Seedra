import './Footer.css';
import { Link } from "react-router-dom";
import logo from '../../img/logo.svg';
import face from '../../img/face.svg';
import inst from '../../img/inst.svg';

function Footer() {
    return (
        <section className='footer'>
            <div className='footer__conteiner'>
                <nav className='footer__menu'>
                    <ul className='footer__items'>
                        <Link className="footer__link" to='#'><li>ALL PRODUCTS</li></Link>
                        <div className="footer__line" />
                        <Link className="footer__link" to='#'><li>ABOUT SEEDRA</li></Link>
                        <div className="footer__line" />
                        <Link className="footer__link" to='#'><li>OUR BLOG</li></Link>
                        <img className="footer__img" src={logo} />
                        <Link className="footer__link" to='#'><li>Terms&Conditions</li></Link>
                        <div className="footer__line" />
                        <Link className="footer__link" to='#'><li>Privacy Policy</li></Link>
                    </ul>
                </nav>
                <div className='footer__bottom'>
                    <div className='footer__box'>
                        <a className="social__link" href='#'><img className="social__item" src={inst} /></a>
                        <a className="social__link" href='#'><img className="social__item" src={face} /></a>
                    </div>
                    <p className='footer__ps'>All rights reserved</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;