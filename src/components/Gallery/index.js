import { useState, useRef } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Zoom } from 'swiper';
import './index.scss';

// install Swiper components
SwiperCore.use([Autoplay, EffectFade, Zoom]);


const Gallery = ({ images }) => {
  const ref = useRef(null);
  
  const params = {
    loop: true,
    preloadImages: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    zoom: true,
    preventInteractionOnTransition: true,
   onSlideChange: () => ref.current.style.width =`500px`,
  };

  const slideParams = {
    //isActive: () => setActive(true)
  };

  return (
    <div className="card__gallery gallery">
      <Swiper ref={ref} {...params}>
        {images && images.map((el)=> (
          <SwiperSlide key={el.key} {...slideParams}>
            <img className="gallery__image" src={el.src} alt={el.descr} width="304px" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default Gallery;