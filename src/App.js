import './App.css';
import { Data } from './components/Data';
import Footer from './components/Footer';
import  Navbar  from './components/Navbar';
import { AllRoutes } from './components/routes/AllRoutes';
import { Swat } from './components/swat';
import User from './components/user';

function App() {
  return (
    <div className="App">
    
    {/* <User/>
    <Data/> */}
    <Navbar/>
    <AllRoutes/>

    <Footer/>

    </div>
  );
}

export default App;
