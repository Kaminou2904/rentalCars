import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Listing from './Pages/Listing/Listing';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:category' element={<Listing/>}/>
          <Route path='/:category/:name' element={<Detail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
