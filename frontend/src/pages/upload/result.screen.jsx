import { useState } from 'react';
import TopTitle from '../../components/TopTitle';
import Upload from '../../components/Upload';
import CopyButton from '../../components/buttons/CopyButton';
import { copyToClipboard } from '../../lib/utils';
export default function ({file, cloudURL }) {
  const [isCopied, setIsCopied] = useState(false);
  const url = file && URL.createObjectURL(file);
  const img = {
    url,
    alt: 'Container',
  };
  return (
    <div className="upload-page">
      <TopTitle img="/check-mark.svg" txt2="Uploaded Successfully!" />
      <Upload isPlaceHolder={false} img={img} />
      <CopyButton
        url={cloudURL}
        copyToClipBoard={async (text) => {
          try {
            await copyToClipboard(text);
            setIsCopied(true);
          } catch (err) {
            setIsCopied(false);
          }
        }}
        isCopied={isCopied}
      />
    </div>
  );
}
