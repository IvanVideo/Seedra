import './Topic.css';
import clock from '../../img/clock.svg';
import task from '../../img/task.png';
import girl from '../../img/girl.png';
import { Link } from "react-router-dom";

function Topic() {
    return (
        <section>
            <div className='topic__conteiner'>
                <div className='blogPage__box'>
                    <h1 className='blogPage__title'>Welcome to our blog</h1>
                    <p className='blogPage__subtitle'>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
                </div>
                <div className='topic__main'>
                    <div className='topic__time'>
                        <img src={clock} />
                        <p className='item__date'>12.09.2021</p>
                    </div>
                    <div>
                        <p>Spinach is a cool-season plant that’s one of the first crops of spring and a great fall crop as well. You’ll enjoy growing this undemanding plant and will enjoy eating it even more. Harvest spinach any time to enjoy raw in salads or cook it up in seconds for a delicious side dish that’s loaded with vitamins and minerals. If you want to grow spinach in your garden, here’s everything you need to know.</p>
                        <p>You can also download my How Do I Grow Spinach? one-sheet and keep the free resource handy for your reference</p>
                        <img src={task} />
                        <p>When, Where and How to Plant Spinach</p>
                        <p>Spinach can be either sown directly into the garden or started from seeds indoors. For the least work and the most convenience, seedlings can also be purchased from a nursery in spring.</p>
                        <p>To give spinach a head start, plant seeds in sterile seed-starting mix indoors about six weeks before the last expected frost date. The seeds will germinate one to two weeks later in soil that is between 60 and 68 degrees. If growing in a room that stays cool, consider using a seed-starting mat that will raise the temperature of the soil.</p>
                        <p>Spinach is frost tolerant, so it can go in the ground long before many other crops. When spinach seedlings have two true leaves and when there are four or fewer weeks remaining until your last frost date, the seedlings may be transplanted outdoors.</p>
                        <p>Seeds can be planted outdoors as soon as the soil is workable in spring — about six weeks before the last expected frost — and they will germinate as the days warm.</p>
                        <p>To germinate seeds faster and more reliably, there is a process called “priming.” A week before sowing spinach seeds indoors or out, soak seeds in room temperature water overnight or up to 24 hours. Next, place the seeds on a paper towel to air dry for one or two days. Once the seeds appear dry, place them in an airtight container and store the container in a cool place. The seeds will have soaked up and retained enough water to stimulate the first stages of germination. Wait at least five days, but no more than seven, and sow the seeds.</p>
                        <p>Primed spinach seeds will germinate both faster and more uniformly: In about five days, the grass-like seedlings will emerge.</p>
                    </div>
                    <div>
                        <p>Related titles</p>
                        <div className='blog__items'>
                            <div className='blog__item'>
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
            </div>
        </section>
    );
}

export default Topic;