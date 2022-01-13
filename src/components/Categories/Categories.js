import './Categories.css';
import CategoriesElement from '../CategoriesElement/CategoriesElement';
import { productsCategory } from '../../constants/constants'

function Categories() {
    return (
        <section>
            <div className='categories__conteiner'>
                {
                    productsCategory.map(item => (
                        <CategoriesElement
                            data={item}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Categories;