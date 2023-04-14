import { useState, useRef } from 'react';
import './App.css';
import UploadPage from './pages/upload';
import LoadingScreen from './pages/upload/loading.screen';
import ResultScreen from './pages/upload/result.screen';

function App() {
  const [page, setPage] = useState('upload');
  return (
    <div className="App">
      {page === 'upload' && <UploadPage setPage={setPage} />}
      {page === 'loading' && <LoadingScreen setPage={setPage} />}
      {page == 'result' && <ResultScreen setPage={setPage} />}
    </div>
  );
}

export default App;
