import './Slider.css';
import face from '../../img/people.svg';
import star from '../../img/fullstar.svg';
import halfstar from '../../img/star.svg';

function Slider() {
    return (
        <section className='slider'>
            <div className='slider__conteiner'>
                <p className='slider__title'>What out clients say</p>
                <div className='slider__items'>
                    <div className='slide slide-first'>
                        <div>
                            <img src={face} />
                            <div>
                                <p>Carla Samantoes-Diego</p>
                                <p>12.09.2021</p>
                            </div>
                            <img className='card__star' src={star} />
                            <img className='card__star' src={star} />
                            <img className='card__star' src={star} />
                            <img className='card__star' src={star} />
                            <img className='card__star' src={halfstar} />
                            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                                Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                        </div>
                    </div>
                    <div className='slide slide-center'>
                        <div>
                            <img src={face} />
                            <div>
                                <p>Carla Samantoes-Diego</p>
                                <p>12.09.2021</p>
                            </div>
                            <img className='card__star' src={star} />
                            <img className='card__star' src={star} />
                            <img className='card__star' src={star} />
                            <img className='card__star' src={star} />
                            <img className='card__star' src={halfstar} />
                            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                                Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                        </div>
                    </div>
                    <div className='slide slide-third'>
                        <div>
                            <img src={face} />
                            <div>
                                <p>Carla Samantoes-Diego</p>
                                <p>12.09.2021</p>
                            </div>
                            <img className='card__star' src={star} />
                            <img className='card__star' src={star} />
                            <img className='card__star' src={star} />
                            <img className='card__star' src={star} />
                            <img className='card__star' src={halfstar} />
                            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                                Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                        </div>
                    </div>
                </div>
                <div className='slider__cliker'>
                    <div className='slider__element slider__element-1'></div>
                    <div className='slider__element slider__element-2'></div>
                    <div className='slider__element slider__element-3'></div>
                </div>
            </div>
        </section>
    );
}

export default Slider;