


import { Route, Routes } from 'react-router-dom';


import Homepage from '../Pages/HomePage';
import Contact from '../Pages/Contact';
 import { LoginForm } from '../Pages/Login';
 import About from '../Pages/About';
import SignUp from '../components/SignUp';
import MyApplication from '../Pages/MyApplication';


function Allroutes() {




  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Application" element={<MyApplication/>}/>
      


    </Routes>

  );
}

export default Allroutes;
