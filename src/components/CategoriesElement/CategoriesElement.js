import './CategoriesElement.css';

function CategoriesElement(props) {
    return (
        <div className='categoriesElement'>
            <img className='categoriesElement__img' src={props.data.img} />
            <p className='categoriesElement__name'>{props.data.name}</p>
        </div>
    );
}

export default CategoriesElement;