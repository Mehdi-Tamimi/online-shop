
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import HomePage from './components/homePage';
import SearchPage from './components/searchPage';
import CartPage from './components/cartPage';
import { Provider } from 'react-redux';
import { store } from './cart/store';


function App() {
  return (
    <div className='main-container'>
      
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/cart' element={<CartPage/>} />
          </Routes>
        </BrowserRouter> 
      </Provider>
    </div>
  );
}

export default App;
