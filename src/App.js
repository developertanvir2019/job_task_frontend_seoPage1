import './App.css';
import Incomplete from './components/IncompleteCard/Incomplete';

function App() {
  return (
    <div>
      {/* navbar */}
      <div className="bg-orange-100 text-2xl font-semibold text-center text-orange-700">Navbar</div>


      {/* main part */}
      <div>
        <Incomplete />
      </div>


      {/* footer */}
      <div className="bg-orange-100 text-2xl font-semibold text-center text-orange-700 footer-index">Footer</div>
    </div>
  );
}

export default App;
