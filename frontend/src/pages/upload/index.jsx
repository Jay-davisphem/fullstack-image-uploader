import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import TopTitle from '../../components/TopTitle';
import Upload from '../../components/Upload';
import Button from '../../components/buttons/Button';

import uploadBg from '../../assets/upload-bg.svg';

import './pages.css';

export default function ({ setPage }) {
  const img = {
    url: uploadBg,
    alt: 'Container',
  };
  return (
    <div className="upload-page">
      <TopTitle txt1="Upload your image" txt2="File should be Jpeg, Png..." />
      <Upload isPlaceHolder={true} img={img} />
      <p className="or">Or</p>
      <Button
        name="Choose a file"
        setPage={setPage}
        color="#fff"
        bg="#0077ff"
      />
    </div>
  );
}
