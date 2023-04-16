export default function ({ isPlaceHolder, img }) {
  const placeholder = isPlaceHolder ? 'placeholder' : 'nonplace';
  return (
    <div className={`upload-container ${placeholder}`}>
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
