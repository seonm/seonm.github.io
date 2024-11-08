import React from 'react';
import { isMobile } from 'react-device-detect';
import MapAppButton from '../buttons/map-app-button';
import { Tmap } from '../icons';
import Typography from '../typography/typography';

const OpenTmapButton = () => {
  const openTmapApp = () => {
    const latitude = 335.1642847462087;
    const longitude = 129.05060934054563;

    if (isMobile) {
      const tmapUrl = `tmap://?lat=${latitude}&lon=${longitude}&name=목적지`;
      window.location.href = tmapUrl;
    } else {
      const searchKeyword = '부산 W스퀘어웨딩홀';
      const tmapUrl = `https://www.tmap.co.kr/my_tmap/my_map_tip/map_tip.do?searchKeyword=${encodeURIComponent(searchKeyword)}`; // Tmap 검색 URL 생성
      window.open(tmapUrl, '_blank');
    }
  };

  return (
    <MapAppButton className='flex-1 bg-white' onClick={openTmapApp}>
      <Tmap width={'2rem'} height={'2rem'} />
      <Typography size='xs-b'>Tmap</Typography>
    </MapAppButton>
  );
};
export default OpenTmapButton;
