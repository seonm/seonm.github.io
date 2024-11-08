import { ReactNode } from 'react';
import Typography from '../typography/typography';

interface Props {
  children?: ReactNode;
  color: 'pink' | 'black' | 'transparent';
  content?: string;
  width?: 20;
  subText?: string;
}

const widthCss = {
  20: 'max-w-20',
};

const colorCss = {
  pink: 'bg-pink',
  black: 'bg-black bg-opacity-10',
  transparent: 'bg-transparent',
};

export default function IconButtons({ children, color, content, subText, width }: Props) {
  return (
    <div
      className={`flex flex-1 ${width ? widthCss[width] : ''} flex-col items-center justify-center rounded-lg ${colorCss[color]} gap-2`}
    >
      {children && children}
      {/* {content && <Typography font={'abril'}>{content}</Typography>} */}
      {subText && <Typography>{subText}</Typography>}
    </div>
  );
}
