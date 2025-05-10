import Header from '../components/Header';
import Temperature from '../components/Temperature';

function BoxKiri() {
  return (
    <div className="box-kiri">
      <Header />
      <div className="content">
        <Temperature />
      </div>
    </div>
  );
}

export default BoxKiri;