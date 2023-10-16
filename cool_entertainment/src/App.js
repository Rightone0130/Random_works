
import './App.css';
import CountdownTimer from './componenets/countdownTimer/countdownTimer';
import Footer from './componenets/footer/footer';
import Header from './componenets/header/header';
import LandingPage from './componenets/landingPage/landingPage';

function App() {
  return (
   <>
   <Header/>
   {/* <LandingPage/> */}
   <CountdownTimer/>
   <Footer/>
   
   </>
  );
}

export default App;
