'use client';

import { Copy } from '@/components/icons';
import Typography from '@/components/typography/typography';
import { useState } from 'react';

interface Props {
  // role: 'Groom' | 'Bride';
  name: string;
  account: string;
  bank: string;
}

export default function AccountList({ name, account, bank }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(`${bank} ${account}`);

      alert('복사되었습니다.');
    } catch (err) {
      console.error('복사 실패: ', err);
    }
  };

  return (
    <div onClick={copyAccount} className={`flex w-full cursor-pointer items-end justify-between`}>
      <div className='flex items-end gap-2'>
        <div>
          <Typography size='xs'>{bank}</Typography>
          <Typography size='md' className='break-all'>
            {account}
          </Typography>
        </div>
        <Typography className='min-w-10 break-keep' size='md'>
          {name}
        </Typography>
      </div>
      <Copy />
    </div>
  );
}
