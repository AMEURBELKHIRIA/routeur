import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <NavLink to ={"profile"}>profile</NavLink>
      <NavLink to={"about"}>about</NavLink>
      <NavLink to={"contact"}>contact</NavLink>
      <Routes>
        <Route path='profile' element={<Profile></Profile>}></Route>
        <Route path='about'   element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
