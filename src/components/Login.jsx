import { useEffect, useState } from "react";

 import { NavLink,useNavigate} from "react-router-dom"
export const Login = () => {
  let Nav = useNavigate()
 
   let [loginstate,setloginstate] = useState(false)
   let [obj,setobj] = useState({});

   let [username,setusername] = useState("");
   let [password,setpassword] = useState("");
   


  async function postlogin()
  {

    setobj({...obj,username:username,password:password})

    try{
      // "username": "admin",
      // "pass": "1234",
      
            if(username=="admin" && password=="1234")
            {
              Nav("/")

 
              setloginstate(true);
            }
            else if(username=="John Doe" && password=="0000")
            {
              setloginstate(true);

            }
            else{
              setloginstate(true);
              Nav("/")
            }

    }
    catch(e)
    {
      console.log(e.message)
    }
  
    console.log(loginstate)
  }


  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e)=>{setusername(e.target.value)}}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e)=>{setpassword(e.target.value)}}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={postlogin}>Login</button>
    </div>
  );
};
