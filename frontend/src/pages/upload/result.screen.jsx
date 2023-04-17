import TopTitle from '../../components/TopTitle';
import Upload from '../../components/Upload';
import CopyButton from '../../components/buttons/CopyButton';
import { copyToClipboard } from '../../lib/utils';
export default function ({ setPage, file }) {
  const url = file && URL.createObjectURL(file);
  const img = {
    url,
    alt: 'Container',
  };
  console.log(url);
  return (
    <div className="upload-page">
      <TopTitle img="/check-mark.svg" txt2="Uploaded Successfully!" />
      <Upload isPlaceHolder={false} img={img} />
      <CopyButton
        url={img.url}
        copyToClipBoard={(text) => {
          copyToClipboard(text);
        }}
      />
    </div>
  );
}
