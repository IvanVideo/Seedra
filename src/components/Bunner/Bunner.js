import './Bunner.css';
import { Link } from "react-router-dom";
import fire from '../../img/fire.svg';
import tea from '../../img/tea.png';

function Bunner() {
    return (
        <section className='bunner'>
            <div className='bunner__conteiner'>
                <h1 className='bunner__title'>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
                <p className='bunner__subtitle'>Be sure of our quality - the freshest batches of this season. Non-GMO,
                    Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience
                    is our guarantee</p>
                <div className='bunner__box'>
                    <img src={fire} />
                    <p className='bunner__price'>$12.56</p>
                    <p className='bunner__price_old'>$15.56</p>
                </div>
                <div>
                    <Link to='#'><button className='bunner__button-add'>Add to card</button></Link>
                    <Link to='#'><button className='bunner__button-dis'>Discover</button></Link>
                </div>
                <img className='bunner__img' src={tea} />
            </div>
        </section>
    );
}

export default Bunner;