import { useState, useRef } from 'react';
import './App.css';
import UploadPage from './pages/upload';
import LoadingScreen from './pages/upload/loading.screen';
import ResultScreen from './pages/upload/result.screen';

function App() {
  const [page, setPage] = useState('upload');
  const [file, setFile] = useState();
  return (
    <div className="App">
      {page === 'upload' && <UploadPage setPage={setPage} setFile={setFile} />}
      {page === 'loading' && <LoadingScreen setPage={setPage} />}
      {page == 'result' && <ResultScreen setPage={setPage} file={file} />}
    </div>
  );
}

export default App;
