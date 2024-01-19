// ImageSlider.js

import React, { useState } from 'react';
import './imageSlider.css';

const ImageSlider = ({ images }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
    return null;
    }

    return (
        <div className='slider'>
            <button className='left-arrow' onClick={prevSlide}>&lt;</button>
            <img src={images[current]} alt='project slide' />
            <button className='right-arrow' onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default ImageSlider;
