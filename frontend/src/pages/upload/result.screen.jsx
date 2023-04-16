import TopTitle from '../../components/TopTitle';
import Upload from '../../components/Upload';
import CopyButton from '../../components/buttons/CopyButton';

export default function ({ setPage }) {
  const img = {
    url: '/page3.png',
    alt: 'Container',
  };
  return (
    <div className="upload-page">
      <TopTitle img="/check-mark.svg" txt2="Uploaded Successfully!" />
      <Upload isPlaceHolder={false} img={img} />
      <CopyButton url={img.url} onClick={() => console.log('copied')} />
    </div>
  );
}
