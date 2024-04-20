import axios from "axios";
import React, { useRef, useState } from "react";
import { user } from "../class/user";
import './addUser.css'

 const AddU=()=>{
    const [tempUser,setTempUser]=useState<any>({})
    
    const refName:any = useRef(null);
    const refPassword:any = useRef(null);
    const refEmail:any = useRef(null);
    const refPhone:any = useRef(null);
    const refVisited:any = useRef(null);

    const currName:any = refName.current;
    const currPass:any = refPassword.current;
    const currEmail:any = refEmail.current;
    const currPhone:any = refPhone.current;
    const currVisited:any = refVisited.current;

    const save=()=>{

       if(tempUser.password == "A&E_1234")
          tempUser.isManager = true;          
       else
         tempUser.isManager = false;
         
       let flag=false;

        if(!currName.value)
        {
          flag=true;
          currName.style.borderColor = "red";
          refName.current.placeholder="Enter Name"
        }
        if(!currPass.value)
        {
          flag=true;
          refPassword.current.placeholder="Enter Password"
          currPass.style.borderColor = "red";
        }
        if(!currEmail.value)
        {
          flag=true;
          refEmail.current.placeholder="Enter Email";
          currEmail.style.borderColor = "red";
        }
        if(!currPhone.value)
        {
          flag=true;
          refPhone.current.placeholder="Enter Phone"
          currPhone.style.borderColor = "red";
        }
        if(!currVisited.value)
        {
          flag=true;
          refVisited.current.placeholder="Enter destinations you visited"
          currVisited.style.borderColor = "red";
        }
        if(flag==false)
          axios.put('http://localhost:7777/myUsers/addUser',tempUser).then(k=>alert("Done!!"))
    }

    return <div className="container">
      <center>
     <h1> add users</h1>
     <h3>Enter the user details</h3>
     <label>the name of the user:</label>
     <input type ='text' ref={refName} onChange={(e)=>setTempUser({...tempUser,name:e.target.value})}></input>
     <br></br>

     <label>the password:</label>
     <input type="text" ref={refPassword} onChange={(e)=>setTempUser({...tempUser,password:e.target.value})}></input>
     <br></br>

    <label>the email:</label>
    <input type="text"  ref={refEmail} onChange={(e)=>setTempUser({...tempUser,email:e.target.value})}></input>
    <br></br>

    <label>the phone:</label>
    <input type="text"  ref={refPhone} onChange={(e)=>setTempUser({...tempUser,phone:e.target.value})}></input>
    <br></br>

    <label>the list of destinations you visited</label>
    <input type="text" ref={refVisited} onChange={(e)=>setTempUser({...tempUser, visited:e.target.value.split(" ")})}></input>

    <input type ="button" value="save" onClick={()=>save()}></input>
    </center>
    </div>
    
}

export default AddU

