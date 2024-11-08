import { ReactNode } from 'react';

type EType = 'black' | 'white';

interface Props {
  children: ReactNode;
  className?: string;
  type?: EType;
  onClick?: VoidFunction;
  padding?: string;
}

const typeCss = {
  black: 'bg-black bg-opacity-10',
  white: 'bg-white bg-opacity-20',
};

export default function RoundBox({ children, className, type = 'white', padding = 'p-6', onClick }: Props) {
  return (
    <div className={`${typeCss[type]} flex w-full rounded-3xl ${padding} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
