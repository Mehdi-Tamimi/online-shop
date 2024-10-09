
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import SlidersContainer from './components/slidersContainer';
import HomePage from './components/homePage';
import SearchPage from './components/searchPage';


function App() {
  return (
    <div className='bg-[#75859C]'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
