import Script from 'next/script';
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';

const KAKAO_SDK_URL = '//dapi.kakao.com/v2/maps/sdk.js?appkey=c5b2cd66b423457481bde66dfb56e08c&autoload=false';
const LATITUDE = 35.1642847462087;
const LONGITUDE = 129.05060934054563;

interface Props {
  height: string;
}

const KakaoMap = ({ height }: Props) => {
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);

  useEffect(() => {
    const initializeKakaoMap = () => {
      window.kakao.maps.load(() => {
        setIsSdkLoaded(true);
      });
    };

    if (typeof window.kakao !== 'undefined' && window.kakao.maps) {
      initializeKakaoMap();
    }
  }, []);

  return (
    <div className='w-full flex-1'>
      <Script
        src={KAKAO_SDK_URL}
        strategy='lazyOnload'
        onLoad={() => {
          if (typeof window.kakao !== 'undefined') {
            window.kakao.maps.load(() => setIsSdkLoaded(true));
          }
        }}
      />
      {isSdkLoaded && (
        <Map center={{ lat: LATITUDE, lng: LONGITUDE }} style={{ width: '100%', height: height }}>
          <MapMarker position={{ lat: LATITUDE, lng: LONGITUDE }} />
          <MapTypeControl />
          <ZoomControl />
        </Map>
      )}
    </div>
  );
};

export default KakaoMap;
