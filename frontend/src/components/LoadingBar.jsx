import { useState, useEffect } from 'react';
import ProgressBar from './progress-bar/ProgressBar';
export default function ({
  setPage,
  isLoading,
  setIsLoading,
  file,
  setCloudURL,
  setIsError,
}) {
  const formData = new FormData();
  formData.append('image', file);
  useEffect(() => {
    uploadImage(import.meta.env.VITE_DOMAIN_URL)
  });
  const uploadImage = (url) => {
    fetch(`${url}/upload`, {
      body: formData,
      method: 'post',
    })
      .then((result) => result.json())
      .then((val) => {
        setIsLoading(false);
        setCloudURL(val.url);
        setPage('result');
      })
      .catch((err) => {
        setIsError(true);
        setPage('upload');
      });
  }
  return (
    <div className="loading-bar-container">
      <ProgressBar
        text="Uploading..."
        loadingColor="#2F80ED"
        parentColor="#F2F2F2"
        height="10px"
        borderRadius="8px"
        margin="30px 0 10px"
        isLoading={isLoading}
        setPage={setPage}
      />
    </div>
  );
}
