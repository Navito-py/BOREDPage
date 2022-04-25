import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './Components/Landing';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Bored' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
