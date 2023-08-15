import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { autoSlider, responsive } from './data';

const AutoPlaySlider = () => {



const autoPlaySpeed=1000

    return (
        <div className="container mt-5">
            <Carousel responsive={responsive}
              arrows={false}
                infinite
                autoPlay
                autoPlaySpeed={autoPlaySpeed}
                removeArrowOnDeviceType={['tablet', 'mobile']} >
                {
                    autoSlider.map((a) => (
                        <div className='mt-5'>
                            <img src={a.img} alt="" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default AutoPlaySlider
