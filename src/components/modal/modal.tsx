'use client';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { ReactNode } from 'react';
import { CloseWhite } from '../icons';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: ReactNode;
}

export default function Modal({ open, setOpen, children }: Props) {
  return (
    <Dialog open={open} onClose={setOpen} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />

      <div className='fixed inset-0 z-10 max-h-dvh w-screen overflow-y-auto'>
        <div
          className={'close absolute right-0 top-0 z-50 fill-white p-4 text-white'}
          onClick={() => {
            console.log('close clicked');
            setOpen(false);
          }}
        >
          <CloseWhite />
        </div>
        <DialogPanel
          transition
          className='relative m-auto transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
        >
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
