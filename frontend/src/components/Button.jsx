import LoadingPage from '../pages/upload/loading.screen';

export default function ({ name, setPage }) {
  return (
    <button
      className="btn"
      onClick={(e) => {
        console.log('open file');
        setPage('loading');
      }}
    >
      {name}
    </button>
  );
}
