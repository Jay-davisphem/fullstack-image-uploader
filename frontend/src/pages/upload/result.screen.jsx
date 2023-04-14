import TopTitle from '../../components/TopTitle';
import Upload from '../../components/Upload';
import CopyButton from '../../components/CopyButton';

export default function () {
  const img = {
    url: '/dev-logo.png',
    alt: 'Container',
  };
  return (
    <div className="upload-page">
      <TopTitle img={img} txt2="lfklfklfkflkflk" />
      <Upload isPlaceHolder={false} img={img} />
      <CopyButton url={img.url} />
    </div>
  );
}
