import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import Books from './pages/Books';
import Addbook from './pages/Addbook';

function App() {


  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="books" element={<Books/>}/>
        <Route path="addbook" element={<Addbook/>}/>
      </Routes>
    
  );
}

export default App;
