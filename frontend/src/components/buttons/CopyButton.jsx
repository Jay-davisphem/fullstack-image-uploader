import { copyToClipboard } from '../../lib/utils';
import Button from './Button';
export default function ({ url, copyToClipBoard, isCopied }) {
  return (
    <div className="copy">
      <p
        className={`image-url ${isCopied ? 'copied' : ''}`}
        onCopy={(e) => copyToClipBoard(url)}
        onCut={(e) => (copyToClipboard = url)}
      >
        {url.length > 42 ? url.substring(0, 42) + '...' : url}
      </p>
      <Button
        name={`${isCopied ? 'Copied' : 'Copy Link'}`}
        onClick={(e) => copyToClipBoard(url)}
        color="#fff"
        bg="#2F80ED"
      />
    </div>
  );
}
