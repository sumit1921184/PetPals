import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { store } from "./Redux/store"; // Assuming you have a Redux store set u
import { Navbar } from "./Components/Navbar";

<<<<<<< HEAD
import Allroutes from "./Routing/AllRoutes";
import Footer from "./Components/footer";
=======
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import {store} from './Redux/store'; // Assuming you have a Redux store set u
import { Navbar } from './components/Navbar';





import Allroutes from './Routing/AllRoutes';
import Footer from './components/footer';
>>>>>>> 4e3e0f5b2984d39ad2a5b66ade685f00377d0ec4

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Allroutes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
