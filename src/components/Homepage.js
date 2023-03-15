import React, { useState, useEffect } from "react";
import './Homepage.css'

function App() {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>New Arrivals</h1>
      <div className="container"> 
        <div className="row">

        {data.map((dataObj, index) => {
          return (        
                <div className="col-4 p-4">
                    <div className="card" >
                        <img className="card-img-top" style={{height: "300px"}} src={dataObj.image}/>
                        <div className="card-body">
                            <div className="card-title">
                                {dataObj.title}
                            </div>
                            <div className="card-text" style={{height: "5rem"}}>
                            Price: {dataObj.price}
                            </div>
                            <a href="#" className="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                </div>
                );
            })}

           </div>
        </div>
    </div>
  );
}

export default App;


