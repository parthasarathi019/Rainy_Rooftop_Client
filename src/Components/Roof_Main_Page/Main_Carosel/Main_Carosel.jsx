//eslint-disable-next-line
import React from 'react';
import'./Main_Carosel.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'
const Main_Carosel = () => {
    return (
        <div>
             <section>
                    <Carousel className='main-slide'>
                        <div>
                            <img className='h-[240px] md:h-[500px]' src={img1} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[500px]' src={img2} />
                            {/* <p className="legend">Legend 2</p> */}
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[500px]' src={img3} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[500px]' src={img4} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[500px]' src={img5} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                        <div>
                            <img className='h-[240px] md:h-[500px]' src={img6} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                    </Carousel>
                </section>
        </div>
    );
};

export default Main_Carosel;