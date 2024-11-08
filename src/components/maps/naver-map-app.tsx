import React from 'react';
import { isMobile } from 'react-device-detect';
import MapAppButton from '../buttons/map-app-button';
import { NaverMap } from '../icons';
import Typography from '../typography/typography';

const OpenNaverMapButton = () => {
  const openNaverMap = () => {
    const latitude = 335.1642847462087;
    const longitude = 129.05060934054563;

    if (isMobile) {
      const naverMapUrl = `naveropenapp://map?lat=${latitude}&lng=${longitude}`; // 좌표를 URL에 포함
      window.location.href = naverMapUrl;
    } else {
      const naverWebUrl = `https://map.naver.com/v5/search/부산 W스퀘어웨딩홀`;
      window.open(naverWebUrl, '_blank');
    }
  };

  return (
    <MapAppButton className='flex-1 bg-white' onClick={openNaverMap}>
      <img src={NaverMap.src} className='h-8 w-8' />
      <Typography size='xs-b'>네이버</Typography>
    </MapAppButton>
  );
};
export default OpenNaverMapButton;
