


import { Route, Routes } from 'react-router-dom';

import Homepage from '../pages/HomePage';
// import Login from '../pages/Login';

function Allroutes() {




  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/login" element={<Login />} /> */}

    </Routes>

  );
}

export default Allroutes;
