import './Publicity.css';
import left from '../../img/1.png';
import right from '../../img/2.png';

function Publicity() {
    return (
        <section className='publicity'>
            <p className='publicity__title'>We sell seeds </p>
            <p className='publicity__subtitle'>that always sprout and gardening supplies which never break</p>
            <img className='publicity__left' src={left} />
            <img className='publicity__right' src={right} />
        </section>
    );
}

export default Publicity;