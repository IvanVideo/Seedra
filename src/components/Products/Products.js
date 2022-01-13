import './Products.css';
import Categories from '../Categories/Categories';
import { cards } from '../../constants/constants';
import Card from '../Card/Card';

function Products() {
    return (
        <section>
            <div className='products__conteiner'>
                <div className='products__box'>
                    <p className='products__title'>Our products.</p>
                    <button className='products__button'>View all (12)</button>
                </div>
                <Categories />
                <div className='products__items'>
                    {
                        cards.map(item => (
                            <Card
                                item={item}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Products;