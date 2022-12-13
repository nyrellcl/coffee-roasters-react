import MainHome from './pages/home/MainHome';
import {Route, Routes } from 'react-router-dom'
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

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
