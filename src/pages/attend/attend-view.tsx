'use client';

import RadioGroup from '@/components/radio/radio-group';
import RoundBox from '@/components/round-box/round-box';
import Typography from '@/components/typography/typography';
import { useRouter } from 'next/navigation';

import { ChangeEvent } from 'react';

import { FieldValues, useForm } from 'react-hook-form';

const directionList = [
  { value: '1', tag: '하행', label: `서울/수원 → 부산` },
  { value: '2', tag: '상행', label: `부산 → 서울/수원` },
  { value: '3', tag: '왕복', label: `서울/수원 ↔ 부산` },
];

const boardingList = [
  { value: '1', tag: '오전 6시 20분', label: `수원역 6번 출구 방면 매산지구대 앞` },
  { value: '2', tag: '오전 7시', label: `사당역 1번 출구 방면 공영 주차장` },
];

export default function AttendView() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const router = useRouter();

  const onSubmit = async (form: FieldValues) => {
    try {
      await fetch('/api/attend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      alert('제출 성공');
      reset();
      router.push('main');
    } catch (error) {
      alert('제출 실패 : 다시 등록해주세요.');
    }
  };

  const inputStyle = 'rounded-md px-3 py-2 border border-1 border-white bg-transparent font-light';

  const handleRadio = (event: ChangeEvent<HTMLInputElement>, name: string) => {
    setValue(name, event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='relative mb-20 w-full'>
      <div className='flex flex-col gap-4'>
        <RoundBox type='white' padding='px-6 py-12' className='flex-1 flex-col gap-12'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <Typography size='xs-b' color='text-black'>
                이름 <span className='text-red-600'>*</span>
              </Typography>
              <input
                placeholder='이름을 입력해주세요.'
                className={inputStyle}
                {...register('name', { required: true })}
                maxLength={50}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Typography size='xs-b' color='text-black'>
                연락처 <span className='text-red-600'>*</span>
              </Typography>
              <input
                placeholder='-를 제외하고 입력해주세요.'
                className={inputStyle}
                {...register('tel', { required: true })}
                maxLength={11}
                minLength={10}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Typography size='xs-b' color='text-black'>
                탑승 유형 <span className='text-red-600'>*</span>
              </Typography>
              <RadioGroup register={register} onChange={handleRadio} list={directionList} name='direction' />
            </div>
            <div className='flex flex-col gap-2'>
              <Typography size='xs-b' color='text-black'>
                하행선 탑승 위치 <span className='text-red-600'>*</span>
              </Typography>
              <Typography size='xs' color='text-black'>
                [차량번호] 경기77 아 9078 <br /> [기사님] 장수용 010 7630 6689
              </Typography>
              <RadioGroup register={register} onChange={handleRadio} list={boardingList} name='boarding' />
            </div>
            {errors.exampleRequired && <span>필수값을 입력해주세요.</span>}
          </div>
        </RoundBox>

        <button
          type='submit'
          className='fixed bottom-4 left-1/2 w-[calc(100%-3rem)] max-w-md -translate-x-1/2 rounded-3xl bg-white p-4 py-3 font-light text-red-300'
        >
          신청
        </button>
      </div>
    </form>
  );
}
