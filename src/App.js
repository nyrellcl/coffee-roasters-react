import { Route, Routes } from 'react-router-dom'
import MainHome from './pages/home/MainHome';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import MainAbout from "./pages/about/MainAbout"
import MainPlan from './pages/plan/Mainplan';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/coffee-roasters-react" exact element={<MainHome />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/plan" element={<MainPlan />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
