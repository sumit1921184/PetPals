// HomePage.jsx


import Article from "../Components/Article";
import FirstDiv from "../Components/FirstDiv";






const HomePage = () => {
  return (
    <div>
      
      <FirstDiv/>
      <h2 style={{ textAlign: 'center',fontSize: '50px', margin: '20px 0',fontWeight: 'bold',fontFamily: "sans-serif", color:'yellowgreen'}}>You can’t buy love, but you can rescue it</h2>
      <Article/>
      
    </div>
  );
};

export default HomePage;
