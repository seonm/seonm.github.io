'use client';
import IconButtons from '@/components/buttons/icon-button';
import { Call, Chat } from '@/components/icons';

import Typography from '@/components/typography/typography';
import Link from 'next/link';

interface Props {
  role: string;
  name: string;
  tel: string;
}

export default function ContactItem({ role, name, tel }: Props) {
  return (
    <div className='flex items-center justify-between gap-2'>
      <div className='flex items-center justify-between gap-2'>
        <Typography size='md' color='text-black'>
          {name}
        </Typography>
      </div>

      <div className='flex gap-4'>
        <Link href={`tel:${tel}`} className='flex items-center gap-2'>
          <Call width={24} height={24} />
          {/* <Typography size='xs'>전화하기</Typography> */}
        </Link>
        <Link href={`sms:${tel}`} className='flex items-center gap-2'>
          <Chat width={24} height={24} />
          {/* <Typography size='xs'>문자하기</Typography> */}
        </Link>
      </div>
    </div>
  );
}
