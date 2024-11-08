import GalleryView from '@/pages/gallery/gallery-view';
import DetailLayout from '../layout/detail-layout';

export default function Main() {
  return (
    <DetailLayout title={'Gallery'} subTitle={'웨딩 갤러리'}>
      <GalleryView />
    </DetailLayout>
  );
}
