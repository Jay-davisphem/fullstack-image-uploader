import { useState, useEffect } from 'react';
import ProgressBar from './progress-bar/ProgressBar';
export default function ({ isError }) {
  return (
    <div className="loading-bar-container">
      <ProgressBar
        text="Uploading..."
        loadingColor="#0077ff"
        parentColor="lightgrey"
        height="10px"
        borderRadius="20px"
        margin="30px 0 10px"
        completed={false}
      />
    </div>
  );
}
