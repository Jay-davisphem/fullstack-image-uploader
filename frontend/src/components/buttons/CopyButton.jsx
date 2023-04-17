import Button from './Button';
export default function ({ url, copyToClipBoard }) {
  return (
    <div className="copy">
      <p className="image-url">
        {url.length > 42 ? url.substring(0, 42) + '...' : url}
      </p>
      <Button
        name="Copy Link"
        onClick={(e) => copyToClipBoard(url)}
        color="#fff"
        bg="#2F80ED"
      />
    </div>
  );
}
