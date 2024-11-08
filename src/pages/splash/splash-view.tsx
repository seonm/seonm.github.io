'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Typography from '@/components/typography/typography';

export default function SplashView() {
  const imageUrl = '/img/splash.png';
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'We are\ngetting\nmarried'; // 줄바꿈 포함 텍스트
  const [index, setIndex] = useState(0);
  const [byMiText, setByMiText] = useState('');
  const fullByMiText = 'by.mi'; // by.mi 텍스트
  const [byMiIndex, setByMiIndex] = useState(0);
  const [byMiStart, setByMiStart] = useState(false); // by.mi 애니메이션 시작 여부

  useEffect(() => {
    // 글자 입력 효과
    const textInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else if (!byMiStart) {
        setByMiStart(true); // by.mi 애니메이션 시작
        clearInterval(textInterval);
      }
    }, 100); // 글자 입력 속도

    return () => clearInterval(textInterval);
  }, [index, fullText, byMiStart]);

  useEffect(() => {
    if (byMiStart) {
      const byMiInterval = setInterval(() => {
        if (byMiIndex < fullByMiText.length) {
          setByMiText((prev) => prev + fullByMiText[byMiIndex]);
          setByMiIndex((prev) => prev + 1);
        } else {
          clearInterval(byMiInterval);
          // 모든 글자가 입력되면 페이드아웃 시작
          const fadeOutTimer = setTimeout(() => {
            setFadeOut(true); // 페이드아웃 시작
            setTimeout(() => {
              router.push('/main'); // 페이지 이동
            }, 500); // 0.5초 후 이동
          }, 800); // 1초 대기 후 페이드아웃 시작
        }
      }, 200); // 글자 입력 속도

      return () => clearInterval(byMiInterval);
    }
  }, [byMiStart, byMiIndex, fullByMiText, router]);

  return (
    <div className={`h-screen bg-cover bg-center`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='flex h-screen flex-col items-center justify-center gap-12 text-center'>
        <Typography
          size={'xl'}
          font={'italiana'}
          color='text-white'
          align='center'
          className={`tracking-tight transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          {text.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
          {/* 줄바꿈을 위한 <br /> 태그 사용 */}
        </Typography>
        <Typography
          size={'md'}
          font={'italiana'}
          color='text-white'
          align='center'
          className={`tracking-tight transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          {byMiText} {/* by.mi 애니메이션 텍스트 표시 */}
        </Typography>
      </div>
    </div>
  );
}
