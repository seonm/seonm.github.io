import { Abril_Fatface, Italiana } from 'next/font/google';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  size?: 'xs' | 'xs-b' | 'md' | 'md-b' | 'lg' | 'xl';
  color?: string;
  font?: 'abril' | 'italiana';
  align?: 'center' | 'left' | 'right';
  className?: string;
}

const sizeType = {
  xs: 'text-xs font-light', // 12
  'xs-b': 'text-xs', // 12
  md: 'text-base font-light', // 16
  'md-b': 'text-base',
  lg: 'text-2xl', // 24
  xl: 'text-4xl', // 36
};

const italiana = Italiana({
  subsets: ['latin'], // preload에 사용할 subsets입니다.
  weight: ['400'],
  variable: '--italiana', // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

const abril = Abril_Fatface({
  subsets: ['latin'], // preload에 사용할 subsets입니다.
  weight: ['400'],
  variable: '--abril', // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

const alignType = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

export default function Typography({
  children,
  size = 'md',
  color = 'text-black',
  font,
  align = 'left',
  className,
}: Props) {
  return (
    <div
      className={`${sizeType[size]} ${color} ${font === 'abril' ? abril.className : ''} ${font === 'italiana' ? italiana.className : ''} ${align ? alignType[align] : ''} break-keep ${className}`}
    >
      {children}
    </div>
  );
}
