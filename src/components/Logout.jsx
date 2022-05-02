import { useNavigate} from "react-router-dom";
export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
   let Nav = useNavigate()
function taketohome()
{
      Nav("/")
}
    
  return <><div><button onClick={taketohome}>logout</button></div></>;
};
