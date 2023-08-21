import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Detail' element={<Detail/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
