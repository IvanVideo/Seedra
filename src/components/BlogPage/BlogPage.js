import './BlogPage.css';
import { Link } from "react-router-dom";
import clock from '../../img/clock.svg';
import green from '../../img/green.png';
import girl from '../../img/girl.png';
import str from '../../img/str.png';

function BlogPage() {
    return (
        <section className='blogPage'>
            <div className='blogPage__conteiner'>
                <div className='blogPage__box'>
                    <h1 className='blogPage__title'>Welcome to our blog</h1>
                    <p className='blogPage__subtitle'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
                </div>
                <div>
                    <input className='blogPage__input' placeholder='Search' />
                    <select className='blogPage__select'>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                    <div className='blog__items'>
                        <div className='item-1'>
                            <div className='item__time'>
                                <img src={clock} />
                                <p className='item__date'>12.09.2021</p>
                            </div>
                            <p className='item__title item__title_1'>How to plant spinach correctly in winter</p>
                            <p className='item__about item__about_1'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            <Link to='#'><button className='item__button'>Read</button></Link>
                            <img src={green} className='item__img' />
                        </div>
                        <div className='item-2'>
                            <div className='item__time'>
                                <img src={clock} />
                                <p className='item__date'>22.03.2021</p>
                            </div>
                            <p className='item__title'>How to plant spinach correctly in winter</p>
                            <p className='item__about'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            <Link to='#'><button className='item__button'>Read</button></Link>
                            <img src={girl} className='item__img-2' />
                        </div>
                        <div className='item-3'>
                            <div className='item__time'>
                                <img src={clock} />
                                <p className='item__date'>22.03.2021</p>
                            </div>
                            <p className='item__title'>How to plant spinach correctly in winter</p>
                            <Link to='#'><button className='item__button'>Read</button></Link>
                            <img src={str} className='item__img-2' />
                        </div>
                        <div className='item-4'>
                            <div className='item__time'>
                                <img src={clock} />
                                <p className='item__date'>22.03.2021</p>
                            </div>
                            <p className='item__title'>How to plant spinach correctly in winter</p>
                            <Link to='#'><button className='item__button'>Read</button></Link>
                            <img src={str} className='item__img-2' />
                        </div>
                        <div className='item-1'>
                            <div className='item__time'>
                                <img src={clock} />
                                <p className='item__date'>12.09.2021</p>
                            </div>
                            <p className='item__title item__title_1'>How to plant spinach correctly in winter</p>
                            <p className='item__about item__about_1'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            <Link to='#'><button className='item__button'>Read</button></Link>
                            <img src={green} className='item__img' />
                        </div>
                        <div className='item-4'>
                            <div className='item__time'>
                                <img src={clock} />
                                <p className='item__date'>22.03.2021</p>
                            </div>
                            <p className='item__title'>How to plant spinach correctly in winter</p>
                            <Link to='#'><button className='item__button'>Read</button></Link>
                            <img src={str} className='item__img-2' />
                        </div>
                        <div className='item-7'>
                            <div className='item__time'>
                                <img src={clock} />
                                <p className='item__date'>22.03.2021</p>
                            </div>
                            <p className='item__title'>How to plant spinach correctly in winter</p>
                            <p className='item__about'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            <Link to='#'><button className='item__button'>Read</button></Link>
                            <img src={girl} className='item__img-2' />
                        </div>
                        <div className='item-8'>
                            <div className='item__time'>
                                <img src={clock} />
                                <p className='item__date'>22.03.2021</p>
                            </div>
                            <p className='item__title'>How to plant spinach correctly in winter</p>
                            <p className='item__about'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            <Link to='#'><button className='item__button'>Read</button></Link>
                            <img src={girl} className='item__img-2' />
                        </div>
                        <div className='item-9'>
                            <div className='item__time'>
                                <img src={clock} />
                                <p className='item__date'>22.03.2021</p>
                            </div>
                            <p className='item__title'>How to plant spinach correctly in winter</p>
                            <p className='item__about'>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                            <Link to='#'><button className='item__button'>Read</button></Link>
                            <img src={girl} className='item__img-2' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogPage;