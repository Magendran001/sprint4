import { useEffect, useState } from "react";
import { store } from "../Redux/store";
import Orderstable from "./Orderstable";

export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux
          let ordersdata = store.getState();

           let [Ordersdata,setOrdersdata] =useState([]);

    
   useEffect(()=>{
     
       getdata();


   },[])

   async function getdata()
   {
     let x =await fetch("http://localhost:8080/orders");
     let y = await x.json();
     setOrdersdata(y);
     
     
     store.dispatch({type:"store",payload:y});

      
      

   }
   


  return (
    <div>
      <div>
        <div>
          <select className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>

          {Ordersdata.map((ele)=>{ return <Orderstable data={ele} key= {ele.id  } />})}
          </tbody>
        </table>
      </div>
    </div>
  );
};

