import AttendView from '@/pages/attend/attend-view';
import DetailLayout from '../layout/detail-layout';

export default function Attend() {
  return (
    <DetailLayout
      title={'Attendance'}
      subTitle={`하객분들을 위해 버스를 마련했어요:)\n탑승을 희망하시는 분들은 아래 신청서를 작성해주세요!`}
    >
      <AttendView />
    </DetailLayout>
  );
}
