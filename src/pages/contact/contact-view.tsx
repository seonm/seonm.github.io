import Typography from '@/components/typography/typography';
import ContactItem from './contact-item';
import RoundBox from '@/components/round-box/round-box';

const groomList = [
  { role: '어머니', name: '김나원', tel: '010-7390-8733' },
  { role: '신랑', name: '이보영', tel: '010-8903-8733' },
];

const brideList = [
  { role: '아버지', name: '정수철', tel: '010-3650-1664' },
  { role: '어머니', name: '권현자', tel: '010-2585-1664' },
  { role: '신부', name: '정선미', tel: '010-7685-8901' },
];

export default function ContactView() {
  return (
    <RoundBox type='white' padding='px-6 py-12' className='flex-1 flex-col gap-6'>
      <section className='flex flex-col gap-6 border-b border-dashed border-red-300 pb-6'>
        <Typography size='xs-b'>🤵🏻 신랑측</Typography>
        {groomList.map((item) => {
          return <ContactItem role={item.role} name={item.name} tel={item.tel} key={item.tel} />;
        })}
      </section>
      <section className='flex flex-col gap-6'>
        <Typography size='xs-b'>👰🏻‍♀️ 신부측</Typography>
        {brideList.map((item) => {
          return <ContactItem role={item.role} name={item.name} tel={item.tel} key={item.tel} />;
        })}
      </section>
    </RoundBox>
  );
}
