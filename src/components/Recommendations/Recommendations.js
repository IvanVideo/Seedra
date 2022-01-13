import './Recommendations.css';
import apple from '../../img/apple.png';

function Recommendations() {
    return (
        <section className='recommendations'>
            <div className='recommendations__conteiner'>
                <div>
                    <p className='recommendations__title'>Seedra helps to grow fast and efficiant</p>
                    <p className='recommendations__text'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
                    <p className='recommendations__text'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.
                        Your easy growing experience is our guarantee
                        Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                    <p className='recommendations__text'>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                </div>
                <img className='recommendations__img' src={apple} />
            </div>
        </section>
    );
}

export default Recommendations;