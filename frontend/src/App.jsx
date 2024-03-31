
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import {store} from './Redux/store'; // Assuming you have a Redux store set u
import { Navbar } from './components/Navbar';





import Allroutes from './Routing/AllRoutes';
import Footer from './components/footer';

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Navbar/>

          <Allroutes/>
         <Footer/>
      </Router>
    </Provider>

)
    


  


}

export default App;
