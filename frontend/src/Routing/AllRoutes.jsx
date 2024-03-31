


import { Route, Routes } from 'react-router-dom';

<<<<<<< HEAD
import Homepage from '../pages/HomePage';
import Contact from '../pages/Contact';
//  import Login from '../pages/Login';
 import About from '../pages/About';
=======
import Homepage from '../Pages/HomePage';
// import Login from '../pages/Login';
>>>>>>> c86e1180ca35c53ed0a94cad1aeb7c1910f03105

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
