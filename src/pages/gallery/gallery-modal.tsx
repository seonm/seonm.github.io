import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../../public/css/swiper.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

interface Props {
  initNum?: number;
}

const photoList = [
  { src: '/img/003-1.jpg', alt: 'image', sort: 0 },
  { src: '/img/001-1.jpg', alt: 'image', sort: 1 },
  { src: '/img/001.jpg', alt: 'image', sort: 2 },
  { src: '/img/002-1.png', alt: 'image', sort: 3 },
  { src: '/img/005.jpg', alt: 'image', sort: 4 },
  { src: '/img/005-1.jpg', alt: 'image', sort: 5 },
  { src: '/img/004.jpg', alt: 'image', sort: 6 },
  { src: '/img/004-1.jpg', alt: 'image', sort: 7 },
  { src: '/img/006.jpg', alt: 'image', sort: 8 },
  { src: '/img/006-1.jpg', alt: 'image', sort: 9 },
  { src: '/img/007-1.jpg', alt: 'image', sort: 10 },
  { src: '/img/008.jpg', alt: 'image', sort: 11 },
  { src: '/img/008-1.jpg', alt: 'image', sort: 12 },
  { src: '/img/010.jpg', alt: 'image', sort: 13 },
];

export default function GalleryModal({ initNum = 0 }: Props) {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className='swiper-gallery h-screen'
      initialSlide={initNum}
    >
      {photoList.map((item, idx) => {
        return (
          <SwiperSlide key={item.src} className='bg-black'>
            <img src={item.src} className='w-auto object-contain' />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
