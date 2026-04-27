import logo from './logo.svg';
import './App.css';
import {BrowseRouter, BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import MyNavBar from './components/MyNavBar';
import Home from './components/Home';
import List from './components/List';

function App() {
  return (
    <BrowserRouter>
      <div classname="App">
        <MyNavBar></MyNavBar>

        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/" element={<Navigate to="/home"/>}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;