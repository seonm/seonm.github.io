import ContactView from '@/pages/contact/contact-view';
import DetailLayout from '../layout/detail-layout';

export default function Contact() {
  return (
    <DetailLayout
      title={'Contact'}
      subTitle={`여러분과 함께하는 이 특별한 순간에 감사드립니다.\n여러분과의 소통을 기다립니다.😊`}
    >
      <ContactView />
    </DetailLayout>
  );
}
