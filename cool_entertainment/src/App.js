import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import './App.css';
import CountdownTimer from './componenets/countdownTimer/countdownTimer'; // Fix typo here
import Footer from './componenets/footer/footer';
import Header from './componenets/header/header';
import LandingPage from './componenets/landingPage/landingPage';
import Events from "./componenets/Events/events";

function App() {
  return (
    <>
        <Router>
          <Header/>
            <Routes>
                <Route index element={<LandingPage/>}></Route>
                <Route path="/Events" element={<Events/>}></Route>
                <Route path="/About" element={<></>}></Route>
                <Route path="/*" element={<>Error Page</>}></Route>
            </Routes>
           <Footer/>
        </Router> 
    </>
  );
}

export default App;
