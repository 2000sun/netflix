import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Navigation';
import MovieAction from './redux/actions/MovieAction';


function App() {
 
  return (
    <div >
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<MovieDetail/>} />
      </Routes>
      {/* <MovieAction/> */}
      



      
    </div>
  );
}

export default App;
