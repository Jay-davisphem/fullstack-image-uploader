export default function ({ img, txt1, txt2 }) {
  return (
    <div className="top-title-container">
      {img ? (
        <img className="marked-green" src={img} alt="marked green" />
      ) : (
        <p className="text txt1">{txt1}</p>
      )}
      <p className={`text ${img ? 'txt1' : 'txt2'}`}>{txt2}</p>
    </div>
  );
}
