import { useContext, useState } from "react";
import UserContext from "../ourContext";
import { user } from "../class/user";
//import "./ShowUsers.css"; 
import axios from "axios";

const ShowUsers = () => {
  //@ts-ignore
  const list: Array<user> = useContext(UserContext).listUsers;
  const [ListUser, setListUser]=useState();
  
  const dell=(email:string)=>{
    axios.delete(`http://localhost:7777/myUsers/dell/${email}`).then((v=>setListUser(v.data)))}
    
  const showIfManager=(val:boolean | undefined)=>{
    if (val) return 'true' 
    else return 'false'
  }

  
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Is Manager</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Visited</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((l: user) => (
            <tr key={l.email}>
              <td>{l.name}</td>
              <td>{showIfManager(l.isManager)}</td>
              <td>{l.password}</td>
              <td>{l.email}</td>
              <td>{l.phone}</td>
              <td>
                <ul>
                  {l.visited?.map((val, index) => (
                    <li key={index}>{val}</li>
                  ))}
                </ul>
              </td>
              <td><button onClick={() =>//@ts-ignore 
              dell(l.email)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUsers;
