import Button from './Button';
export default function ({ url, onClick }) {
  return (
    <div className="copy">
      <p className="image-url">
        {url > 52 ? url.substring(0, 52) + '...' : url}
      </p>
      <Button name="Copy Link" onClick={onClick} color="#fff" bg="#0077ff" />
    </div>
  );
}
