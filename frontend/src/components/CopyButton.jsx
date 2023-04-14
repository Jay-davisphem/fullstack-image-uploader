import Button from './Button';
export default function ({ url }) {
  return (
    <div className="copy">
      <p className="image-url">{url}</p>
      <Button name="Copy Link" />
    </div>
  );
}
