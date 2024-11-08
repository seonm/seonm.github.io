'use client';

import Modal from '@/components/modal/modal';
import RoundBox from '@/components/round-box/round-box';
import Typography from '@/components/typography/typography';
import { useState } from 'react';
import GalleryModal from './gallery-modal';

interface PhotoProps {
  src: string;
  alt: string;
  sort: number;
}

interface PhotoBoxProps extends Omit<PhotoProps, 'sort'> {
  onClick: () => void;
}

const photoList: PhotoProps[][] = [
  [{ src: '/img/003-1.jpg', alt: 'image', sort: 0 }],
  [
    { src: '/img/001-1.jpg', alt: 'image', sort: 1 },
    { src: '/img/001.jpg', alt: 'image', sort: 2 },
  ],
  [{ src: '/img/002-1.png', alt: 'image', sort: 3 }],
  [
    { src: '/img/005.jpg', alt: 'image', sort: 4 },
    { src: '/img/005-1.jpg', alt: 'image', sort: 5 },
  ],
  [
    { src: '/img/004-1.jpg', alt: 'image', sort: 6 },
    { src: '/img/004.jpg', alt: 'image', sort: 7 },
  ],
  [
    { src: '/img/006.jpg', alt: 'image', sort: 8 },
    { src: '/img/006-1.jpg', alt: 'image', sort: 9 },
  ],
  [{ src: '/img/007-1.jpg', alt: 'image', sort: 10 }],
  [
    { src: '/img/008.jpg', alt: 'image', sort: 11 },
    { src: '/img/008-1.jpg', alt: 'image', sort: 12 },
  ],
  [{ src: '/img/010.jpg', alt: 'image', sort: 13 }],
];

const PhotoBox = ({ src, alt, onClick }: PhotoBoxProps) => {
  return (
    <RoundBox type='white' className={`max-h-44 flex-1 overflow-hidden`} padding='p-0' onClick={onClick}>
      <img src={src} alt={alt} className='h-auto w-full object-cover object-top' />
    </RoundBox>
  );
};

export default function GalleryView() {
  const [open, setOpen] = useState(false);
  const [clickNum, setClickNum] = useState(0);

  const handleOpen = (value: boolean) => {
    setOpen(value);
  };

  return (
    <div>
      <Modal open={open} setOpen={handleOpen}>
        <GalleryModal initNum={clickNum} />
      </Modal>

      <div className='flex flex-col gap-2'>
        {photoList.map((photos, idx) => {
          const length = photos.length;
          const gapType = {
            1: 'gap-0',
            2: 'gap-2',
          };
          return (
            <div className={`flex ${gapType[length as 1 | 2]} `} key={idx}>
              {photos.map((item, idx) => {
                return (
                  <PhotoBox
                    src={item.src}
                    alt={item.alt}
                    key={item.sort}
                    onClick={() => {
                      handleOpen(!open);

                      setClickNum(item.sort);
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
