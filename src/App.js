import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Banner from './Components/Banner/Banner'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Navigation from './Components/Navigation';
import AddService from './Components/AddService/AddService';


function App() {
  return (
    <div>
      <Navigation/>

      <Routes>

      
  
      
      <Route path="/" element={<Home/>}/>
      
      <Route path="/banner" element={<Banner/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/addService" element={<AddService/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
