import React, { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const MapAppButton = ({ children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-1 rounded-md px-3 py-1 text-center text-black ${className}`}
    >
      {children}
    </button>
  );
};

export default MapAppButton;
