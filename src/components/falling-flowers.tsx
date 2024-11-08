import { useEffect, useRef } from 'react';
import '../../public/css/falling-flowers.css';

export default function FallingFlowers() {
  const flowerContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const maxFlowers = 10; // 최대 생성 갯수 설정
    const createFlower = () => {
      const container = flowerContainerRef.current;
      if (container && container.childElementCount < maxFlowers) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${3 + Math.random() * 5}s`;
        flower.style.opacity = `${0.5 + Math.random() * 0.5}`;
        container.appendChild(flower);

        flower.addEventListener('animationend', () => {
          flower.remove();
        });
      }
    };

    // 꽃을 일정 시간마다 생성
    const interval = setInterval(createFlower, 300);
    return () => clearInterval(interval);
  }, []);

  return <div ref={flowerContainerRef} className={'flowerContainer'} />;
}
