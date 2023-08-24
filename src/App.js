import { Toaster } from 'react-hot-toast';
import './App.css';
import CompletedCard from './components/CompleteCard/CompletedCard';
import DoingCard from './components/DoingCard/DoingCard';
import Incomplete from './components/IncompleteCard/Incomplete';
import OverViewCard from './components/OverViewCard/OverViewCard';
import TodoCard from './components/TodoCard/TodoCard';
import UnderReview from './components/UnderReview/UnderReview';

function App() {
  return (
    <div>
      {/* main part */}
      <div className='flex-containerr  m-5 '>
        <div className='for_flex flex gap-2'>
          <Incomplete />
          <TodoCard />
          <DoingCard />
          <UnderReview />
          <CompletedCard />
          <OverViewCard />
        </div>
      </div>


      {/* footer */}
      <div className="bg-orange-100 text-2xl font-semibold text-center text-orange-700 footer-index">Footer</div>
      <Toaster />
    </div>
  );
}

export default App;
