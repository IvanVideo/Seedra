import './Card.css';
import star from '../../img/fullstar.svg';
import halfstar from '../../img/star.svg';


function Card(props) {
    return (
        <div className='card'>
            <img src={props.item.img} />
            <div className='card__stars'>
                <img className='card__star' src={star} />
                <img className='card__star' src={star} />
                <img className='card__star' src={star} />
                <img className='card__star' src={star} />
                <img className='card__star' src={halfstar} />
                <p className='card__numbers'>({props.item.starts})</p>
            </div>
            <p className='card__about'>{props.item.about}</p>
            <div className='card__box'>
                <p className='card__price'>${props.item.price}</p>
                <button className='card__button' />
            </div>
        </div>
    );
}

export default Card;