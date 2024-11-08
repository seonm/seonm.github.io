'use client';
import { Bus, Call, Car, Train } from '@/components/icons';
import KakaoMap from '@/components/maps/kakao-map';
import OpenKakaoMapButton from '@/components/maps/kakao-map-app';
import OpenNaverMapButton from '@/components/maps/naver-map-app';
import OpenTmapButton from '@/components/maps/tmap-app';
import RoundBox from '@/components/round-box/round-box';
import Typography from '@/components/typography/typography';
import Link from 'next/link';

export default function LocationView() {
  return (
    <RoundBox type='white' padding='px-6 py-12' className='flex-1 flex-col gap-12'>
      <div className='flex flex-col items-center gap-6'>
        <div className='flex flex-col items-center gap-2'>
          <Typography size='md-b' align='center'>
            W스퀘어 웨딩홀 / 가든홀
          </Typography>

          <Typography size='md' align='center'>
            부산광역시 부산진구 신천대로 252(부암동) 3층
          </Typography>
          <Link href={`tel:051-711-0177`} className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <Call width='1rem' height='1rem' />
              <Typography size='md'>051-711-0177</Typography>
            </div>
          </Link>
        </div>
        <div className='flex w-full flex-col justify-center gap-4'>
          <KakaoMap height='230px' />
          <div className='flex flex-row justify-between gap-2'>
            <OpenNaverMapButton />
            <OpenTmapButton />
            <OpenKakaoMapButton />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-1'>
          <Train width={24} height={24} />
          <Typography size='md-b'>지하철</Typography>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <Typography>2호선 부암역 4번 출구 (도보 10분)</Typography>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-1'>
          <Bus width={24} height={24} />
          <Typography size='md-b'>버스</Typography>
        </div>
        <div>
          <Typography size='md-b'>진구청앞 하차</Typography>
          <Typography>54, 63, 66, 81, 83-1, 88, 103, 124, 133 (이마트 주차장 입구쪽으로 도보 5분)</Typography>
        </div>
        <div>
          <Typography size='md-b'>진양교차로 하차</Typography>
          <Typography>17, 23, 44, 129-1, 138-1, 141, 160, 167, 169-1 (부암로타리 방면 도보 5분)</Typography>
        </div>
        <div>
          <Typography size='md-b'>셔틀버스</Typography>
          <Typography>
            1시간 3회 운영 (20분 간격)
            <br />
            서면역 9번 출구 (10분, 30분, 50분)
            <br />
            → 부암역 4번출구 (15분, 35분, 55분)
            <br />→ W스퀘어웨딩홀 (20분, 40분, 정시)
          </Typography>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-1'>
          <Car width={24} height={24} />
          <Typography size='md-b'>주차정보</Typography>
        </div>
        <div>
          <Typography size='md-b'>지하 2층 ~ 4층 / 무료 주차 3시간</Typography>
          <Typography>이마트 트레이더스, 롯데마트 주차가능</Typography>
        </div>
      </div>

      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex items-center gap-1'>
          <Bus width={24} height={24} />
          <Typography size='md-b'>대절 버스 (서울-부산)</Typography>
        </div>
        <div>
          <Typography size='xs-b'>오전 6시 20분</Typography>
          <Typography size='md'>수원역 6번 출구 방면 매산지구대 앞</Typography>
        </div>
        <div>
          <Typography size='xs-b'>오전 7시</Typography>
          <Typography size='md'>사당역 1번 출구 방면 공영 주차장</Typography>
        </div>
        <div>
          <Typography size='xs-b'>차량번호</Typography>
          <Typography size='md'>경기77 아 9078</Typography>
        </div>
        <div>
          <Typography size='xs-b'>기사님 연락처</Typography>
          <Link href={`tel:010-7630-6689`} className='flex items-center gap-2'>
            <Typography size='md'>장수용 010-7630-6689 </Typography>
          </Link>
        </div>
      </div>
    </RoundBox>
  );
}
