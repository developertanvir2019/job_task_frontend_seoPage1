import './App.css';
import Incomplete from './components/IncompleteCard/Incomplete';
import TodoCard from './components/TodoCard/TodoCard';

function App() {
  return (
    <div>
      {/* navbar */}
      <div className="bg-orange-100 text-2xl font-semibold text-center text-orange-700">Navbar</div>


      {/* main part */}
      <div className='flex'>
        <Incomplete />
        <TodoCard />
      </div>


      {/* footer */}
      <div className="bg-orange-100 text-2xl font-semibold text-center text-orange-700 footer-index">Footer</div>
    </div>
  );
}

export default App;
