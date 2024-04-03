import { useEffect, useState } from "react";
import "../CSS/Application.css";


function MyApplication(){
    const [dataa,setData] = useState([]);
    useEffect(()=>{
        async function application(){
            let jwt = JSON.parse(localStorage.getItem("token"));
            try{
                let res = await fetch("https://petpals-4.onrender.com/application/getApp", {
                    method: 'GET',
                    headers: {
                      'Authorization': `Bearer ${jwt}`,
                      'Content-Type': 'application/json'
                    }});
                let data =await res.json();
                console.log(data);
                setData(data);
    
            }
            catch(e){
                console.log(e);
            }
          
            
        }
        application();
    },[])

    // const data = [{
    //     name:"Simbha",
    //     Age:23,
    //     color:"black",
    //     gender:"male",
    //     status:"Rejected"
    // }]
    return(<>
        <div className="main-app-cont">
           <main>
           {dataa.length===0 ?<h1 className="not-app">You do not have application</h1>:<h1 className="h1-app">Applications</h1>}
            
            
           { dataa.length>0 && dataa.map((elem,ind)=>{
              return (
                <div key={ind} className="app-cont">
                    <div className="right">
                        <img src="https://images.dog.ceo/breeds/chow/n02112137_16817.jpg" alt="" />
                    </div>
                    <div className="left">
                        <div className="app-name"> <h1 >{elem.name}</h1></div>
                       <div className="app-name-p">
                       <p>Age: {elem.Age}</p>
                        <p>Color: {elem.color}</p>
                        <p>Gender: {elem.gender}</p>
                      
                           {elem.status == "Applied" && <p >Status: <span className="applied">{elem.status}</span> <div className="app-stat"></div></p>}
                       
                      
                            {elem.status == "Rejected" && <p >Status: <span className="rejected">{elem.status}</span> ❌</p>}
                     
                      
                            {elem.status == "Accepted" && <p > Status: <span className="applied">{elem.status}</span> ✅</p>}
                        
                        
                       </div>
                        
                    
                    </div>
                </div>   
                )
           })}
           </main>
        </div>
    </>)
}

export default MyApplication;