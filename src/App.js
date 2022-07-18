import {Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>


    
     

     
    </div>
  );
}

export default App;
