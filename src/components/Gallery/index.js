import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Zoom } from "swiper";
import "./index.scss";

SwiperCore.use([Autoplay, EffectFade, Zoom]);

const Gallery = ({ images }) => {
  const ref = useRef(null);

  const params = {
    loop: true,
    preloadImages: true,
    autoplay: {
      disableOnInteraction: false,
    },
    effect: "fade",
    zoom: true,
    preventInteractionOnTransition: true,
    watchSlidesVisibility: true,
  };

  return (
    <div className="card__gallery gallery">
      <Swiper ref={ref} {...params}>
        {images &&
          images.map((el) => (
            <SwiperSlide key={el.key}>
              {({ isVisible, isPrev }) =>
                isVisible || isPrev ? (
                  <img
                    className="gallery__image"
                    src={el.src}
                    alt={el.descr}
                    width="304px"
                    style={{
                      transform: "scale(1.3,1.3)",
                      transition: "transform 5s ease-out",
                    }}
                  />
                ) : (
                  <img
                    className="gallery__image"
                    src={el.src}
                    alt={el.descr}
                    width="304px"
                    style={{ transition: "none" }}
                  />
                )
              }
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
