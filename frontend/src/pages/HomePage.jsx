// HomePage.jsx


import Article from "../components/Article";
import Carousel from "../components/Carosuel";





const HomePage = () => {
  return (
    <div>
      
      <Carousel/>
      <h2 style={{ textAlign: 'center',fontSize: '50px', margin: '20px 0',fontWeight: 'bold',fontFamily: "sans-serif", color:'yellowgreen'}}>Article</h2>
      <Article/>
      
    </div>
  );
};

export default HomePage;
