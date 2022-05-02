import { useState,useEffect } from "react";

function Orderstable({data})
{
  //  console.log(data,"dataaa");

   
   let [Status,SetStatus] = useState(false);
   let [use,useset] = useState("")

  

  
  
  if(data.cost===undefined )
  {
    data.cost="-";
    
    useset(true)
    
    console.log(use)
 
  }


  function statuschange()
   {
  
    SetStatus(true)
   }
  return (
    
    <tr className="orders-row">
              <td className="id">{data.id}</td>
              <td className="problem">{data.problem}</td>
              <td className="owner">{data.owner_name}</td>
              <td className="status">{data.status}</td>
              <td className="cost">{data.cost}</td>
              <td className="change-status">
                {/* Show select dropdown only if status is Not Accepted */}
                   
                { !Status?<select className="changeStatus" name="changeStatus" disabled="disabled"  >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>:<select className="changeStatus" name="changeStatus"  >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>}
                
              </td>
              <td className="accept">
                {/* Show this button only if status is Not Accepted */}
                {/* on change make request to update it in db, and show changed status in table */}
                <button onClick={(()=>{statuschange()})}>Accept</button>
              </td>
            </tr>
  )
}

export default Orderstable