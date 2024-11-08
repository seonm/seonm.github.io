import React from 'react';
import { isMobile } from 'react-device-detect';
import MapAppButton from '../buttons/map-app-button';
import { KakaoNavi } from '../icons';
import Typography from '../typography/typography';

export default function OpenKakaoMapButton() {
  const openKakaoMap = () => {
    const latitude = 335.1642847462087;
    const longtitude = 129.05060934054563;

    if (isMobile) {
      const kakaoMapUrl = `kakaomap://look?p=${latitude},${longtitude}`;
      window.location.href = kakaoMapUrl;
    } else {
      const kakaoWebUrl = `https://map.kakao.com/?q=부산 W스퀘어웨딩홀`;
      window.open(kakaoWebUrl, '_blank');
    }
  };

  return (
    <MapAppButton className='flex-1 bg-[#f7e000]' onClick={openKakaoMap}>
      <KakaoNavi width={'1.5rem'} height={'1.5rem'} />
      <Typography size='xs-b'>카카오</Typography>
    </MapAppButton>
  );
}
