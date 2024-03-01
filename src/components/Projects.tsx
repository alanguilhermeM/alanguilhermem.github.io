import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import trybeTunes from '../images/TrybeTunes.png';
import trybeWallet from '../images/trybeWallet.png';
import trybeShop from '../images/TrybeShop.png';
import pixelArt from '../images/PixelArt.png';
import frontEnd from '../images/frontEnd.png';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

import '../styles/swiper.css';

interface SwiperProps {
  spaceBetween: number;
  slidesPerView: number;
  navigation: boolean,
  pagination: { clickable: boolean },
  autoplay: { delay: number },
  effectCards: boolean,
  // onSlideChange: () => void;
  // onSwiper: (swiper: any) => void; // Substitua 'any' pelo tipo apropriado para o objeto swiper
}

const Projects: React.FC = () => {
    const swiperProps: SwiperProps = {
        spaceBetween: 10,
        slidesPerView: 2,
        navigation: true,
        pagination: { clickable: true },
        autoplay: { delay: 2000 },
        effectCards: true
        // onSlideChange: () => console.log('slide change'),
        // onSwiper: (swiper) => console.log(swiper)
    };
    return (
      <Swiper modules={[Navigation, Pagination, Autoplay, EffectCards]} {...swiperProps}>
        <SwiperSlide style={{width: '500px'}}>
            <a href='https://github.com/alanguilhermeM/TrybeTunes'>
              <img src={ trybeTunes } alt='img' />
            </a>
        </SwiperSlide>
        <SwiperSlide style={{width: '500px'}}>
            <a href='https://github.com/alanguilhermeM/TrybeWallet'>
              <img src={ trybeWallet } alt='img' />
            </a>
        </SwiperSlide>
        <SwiperSlide style={{width: '500px'}}>
            <a href='https://github.com/alanguilhermeM/ShoppingCart'>
              <img src={ trybeShop } alt='img' />
            </a>
        </SwiperSlide>
        <SwiperSlide style={{width: '500px'}}>
            <a href='https://github.com/alanguilhermeM/PixelArt'>
              <img src={ pixelArt } alt='img' />
            </a>
        </SwiperSlide>
        <SwiperSlide style={{width: '500px'}}>
            <a href='https://github.com/alanguilhermeM/FrontEnd-online-store'>
              <img src={ frontEnd } alt='img' />
            </a>
        </SwiperSlide>
      </Swiper>
    );
};

export default Projects;
