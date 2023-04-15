import LoadingPage from '../../pages/upload/loading.screen';
import './button.css';
export default function ({ name, setPage, color, bg }) {
  return (
    <button
      className="btn choose-file"
      onClick={(e) => {
        console.log('open file');
        setPage('loading');
      }}
      style={{
        color: color,
        backgroundColor: bg,
      }}
    >
      {name}
    </button>
  );
}
