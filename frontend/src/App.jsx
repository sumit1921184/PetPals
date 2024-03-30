// App.jsx

import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import {store} from './Redux/store'; // Assuming you have a Redux store set u
import { Navbar } from './Components/Navbar';
import "./App.css";
import Allroutes from './Routing/AllRoutes';

function App() {
  return (
    <Provider store={store}> {/* Wrap the entire application with Provider */}
      <Router>
        <Navbar/>
          <Allroutes/>
      </Router>
    </Provider>
  );
}

export default App;
