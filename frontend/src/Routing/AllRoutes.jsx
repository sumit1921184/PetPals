


import { Route, Routes } from 'react-router-dom';


import Homepage from '../pages/HomePage';
import Contact from '../pages/Contact';
 import { LoginForm } from '../pages/Login';
 import About from '../pages/About';
import SignUp from '../Components/SignUp';


function Allroutes() {




  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/SignUp" element={<SignUp />} />
      


    </Routes>

  );
}

export default Allroutes;
