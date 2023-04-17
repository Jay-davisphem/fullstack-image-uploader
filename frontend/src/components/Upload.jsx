import { useEffect, useRef } from 'react';
import { uploadImage } from '../lib/utils';
export default function ({ isPlaceHolder, img, setPage, setFile }) {
  const placeholder = isPlaceHolder ? 'placeholder' : 'nonplace';
  return (
    <div className={`upload-container ${placeholder}`}>
      {isPlaceHolder && (
        <input
          type="file"
          className="hidden-choosefile"
          name="choose-file"
          onChange={() => uploadImage(setFile, setPage)}
        />
      )}
      <img
        className={`image ${placeholder}`}
        src={img.url}
        alt={`${img.alt} image upload ${placeholder}`}
      />
      {isPlaceHolder && (
        <div className="action-txt">Drag & Drop you image here</div>
      )}
    </div>
  );
}
