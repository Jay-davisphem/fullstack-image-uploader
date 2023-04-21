import { useState, useRef } from 'react';
import './App.css';
import UploadPage from './pages/upload';
import LoadingScreen from './pages/upload/loading.screen';
import ResultScreen from './pages/upload/result.screen';
import Footer from './components/footer/Footer';

function App() {
  const [page, setPage] = useState('upload');
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cloudURL, setCloudURL] = useState('');
  return (
    <div className="App">
      <div
        style={{
          minHeight: '90vh',
             display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {page === 'upload' && (
          <UploadPage setPage={setPage} setFile={setFile} isError={isError} />
        )}
        {page === 'loading' && (
          <LoadingScreen
            setPage={setPage}
            isLoading={isLoading}
            file={file}
            setIsLoading={setIsLoading}
            setCloudURL={setCloudURL}
            setIsError={setIsError}
          />
        )}
        {page == 'result' && (
          <ResultScreen setPage={setPage} file={file} cloudURL={cloudURL} />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
