'use client';

import RoundBox from '@/components/round-box/round-box';
import Typography from '@/components/typography/typography';
import AccountList from './account-list';
import IconButtons from '@/components/buttons/icon-button';
import { useRouter } from 'next/navigation';
import { Chat, Location, Bus } from '@/components/icons';
import FallingFlowers from '@/components/falling-flowers';

export default function MainView() {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-4'>
      <FallingFlowers />
      <RoundBox className='items-center justify-between'>
        <div>
          <Typography font={'abril'} size='xs'>
            W square Garden Hall
          </Typography>
          <Typography font={'abril'} size='lg'>
            01.18 15:00
          </Typography>
        </div>
        <Typography font={'abril'} size='xl'>
          D-60
        </Typography>
      </RoundBox>

      <RoundBox
        type='white'
        className={`max-h-72 w-full flex-1 overflow-hidden`}
        padding='p-0'
        onClick={() => router.push('/gallery')}
      >
        <img src={'img/main.jpg'} alt={'gallery button'} className='h-auto w-full object-cover object-bottom' />
      </RoundBox>

      <div className='flex flex-1 flex-row flex-wrap justify-between gap-4'>
        <RoundBox
          className='flex min-h-24 flex-1 cursor-pointer flex-row justify-center'
          onClick={() => router.push('/map')}
        >
          <IconButtons color='transparent' content='Location' subText='오시는길'>
            <Location width={`2rem`} height={`2rem`} />
          </IconButtons>
        </RoundBox>
        <RoundBox
          className='flex min-h-24 flex-1 cursor-pointer flex-row justify-center'
          onClick={() => router.push('/contact')}
        >
          <IconButtons color='transparent' content='Contact' subText='연락하기'>
            <Chat width={`2rem`} height={`2rem`} />
          </IconButtons>
        </RoundBox>
      </div>
      <RoundBox
        className='flex min-h-24 flex-1 cursor-pointer flex-row justify-center'
        onClick={() => router.push('/attend')}
      >
        <IconButtons color='transparent' content='Attendance' subText='대절 버스 탑승 신청'>
          <Bus width={`2rem`} height={`2rem`} />
        </IconButtons>
      </RoundBox>

      <RoundBox className='justify-center'>
        <div className='flex flex-1 flex-col items-center gap-6'>
          <Typography size='lg' font='abril' align='center'>
            BUY ME A COFFEE ☕
          </Typography>
          <div className='flex w-full flex-col gap-4 border-b border-dashed border-red-300 pb-6'>
            <Typography size='xs-b'>🤵🏻 신랑측</Typography>
            <AccountList name='김나원' account='297-64-09857-4' bank='하나은행' />
            <AccountList name='이보영' account='3333-02-667-0893' bank='카카오뱅크' />
          </div>
          <div className='flex w-full flex-col gap-4'>
            <Typography size='xs-b'>👰🏻 신부측</Typography>
            <AccountList name='정수철' account='178178-56-053906' bank='농협은행' />
            <AccountList name='권현자' account='054-12-0938110' bank='부산은행' />
            <AccountList name='정선미' account='488802-04-020215' bank='국민은행' />
          </div>
        </div>
      </RoundBox>
      <RoundBox className='items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
          <Typography size='lg' font='abril' align='center'>
            We are becoming a family
          </Typography>
          <div className='flex flex-row items-center gap-4'>
            <div className='flex flex-col items-center gap-2'>
              {/* <Typography size='xs'>🎗️이수용 & 김나원</Typography> */}
              <Typography size='md'>🤵🏻이보영</Typography>
            </div>
            <Typography size='xs'>❤️</Typography>
            <div className='flex flex-col items-center gap-2'>
              {/* <Typography size='xs'>정수철 & 권현자</Typography> */}
              <Typography size='md'>👰🏻‍정선미</Typography>
            </div>
          </div>
        </div>
      </RoundBox>
    </div>
  );
}
