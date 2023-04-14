import TopTitle from '../../components/TopTitle';
import Upload from '../../components/Upload';
import Button from '../../components/Button';

import uploadBg from '../../assets/upload-bg.svg';

export default function ({setPage}) {
  const img = {
    url: uploadBg,
    alt: 'Container',
  };
  return (
    <div className="upload-page">
      <TopTitle txt1="jfjkfkf" txt2="lfklfklfkflkflk" />
      <Upload isPlaceHolder={true} img={img} />
      <Button name="Upload" setPage={setPage}/>
    </div>
  );
}
