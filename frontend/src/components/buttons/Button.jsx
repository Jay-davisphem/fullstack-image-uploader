import LoadingPage from '../../pages/upload/loading.screen';
import './button.css';
export default function ({ name, onClick, color, bg }) {
  return (
    <button
      className="btn choose-file"
      onClick={onClick}
      style={{
        color: color,
        backgroundColor: bg,
      }}
    >
      {name}
    </button>
  );
}
