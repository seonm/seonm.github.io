import Typography from '@/components/typography/typography';

export default function DetailLayout({
  title,
  subTitle,
  children,
}: Readonly<{
  title: string;
  subTitle: string;
  children: React.ReactNode;
}>) {
  return (
    <div className='m-auto flex w-full max-w-md flex-col items-center justify-center gap-8 p-6'>
      <div className='flex w-full flex-1 flex-col items-center gap-2'>
        <Typography size='lg' color='black' font='abril'>
          {title}
        </Typography>
        <Typography size='xs' color='black' align='center' className='whitespace-pre-line'>
          {subTitle}
        </Typography>
      </div>
      {children}
    </div>
  );
}
