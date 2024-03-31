


import { Route, Routes } from 'react-router-dom';

import Homepage from '../pages/HomePage';
import Contact from '../pages/Contact';
//  import Login from '../pages/Login';
 import About from '../pages/About';

function Allroutes() {




  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      {/* <Route path="/login" element={<Login />} /> */}


    </Routes>

  );
}

export default Allroutes;
