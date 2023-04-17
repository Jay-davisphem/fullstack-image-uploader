import { useState, useEffect } from 'react';
import ProgressBar from './progress-bar/ProgressBar';
export default function ({ isError, setPage }) {
  return (
    <div className="loading-bar-container">
      <ProgressBar
        text="Uploading..."
        loadingColor="#2F80ED"
        parentColor="#F2F2F2"
        height="10px"
        borderRadius="8px"
        margin="30px 0 10px"
        completed={true}
        setPage={setPage}
      />
    </div>
  );
}
