<<<<<<< HEAD
import {Route, Routes } from 'react-router-dom'
import MainHome from './pages/home/MainHome';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
=======
import MainHome from './pages/home/MainHome';
import {Route, Routes } from 'react-router-dom'
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import './Index-SCSS/index.css'
>>>>>>> 67dd6e8d73de20e49bb67335f42055dd9a7e0239

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/coffee-roasters-react" exact element={<MainHome/>}/>
    </Routes> 
    <Footer/>
    </>
  );
}

export default App;
