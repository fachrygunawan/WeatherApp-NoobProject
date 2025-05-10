import Header from './Header';
import Temperature from './Temperature';
import Details from './Details';

function BoxKiri() {
  return (
    <div className="box-kiri">
      <Header />
      <div className="content">
        <Temperature />
        <Details />
      </div>
    </div>
  );
}

export default BoxKiri;