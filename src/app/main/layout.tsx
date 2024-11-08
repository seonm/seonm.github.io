import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className='m-auto max-w-md p-6'>{children}</div>;
}
