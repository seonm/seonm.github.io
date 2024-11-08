import LocationView from '@/pages/location/location-view';
import DetailLayout from '../layout/detail-layout';

export default function Map() {
  return (
    <DetailLayout title={'Location'} subTitle={`오시는 길`}>
      <LocationView />
    </DetailLayout>
  );
}
