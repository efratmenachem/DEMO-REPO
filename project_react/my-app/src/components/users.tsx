import React, { useContext, useRef } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import UserContext from "../ourContext";
import { user } from "../class/user";
import { useDispatch } from "react-redux";
import './users.css'
import image from '../pic/main.jpg';

const Users = () => {
   const refPassword = useRef(null);
   const refName = useRef(null);
   const navigate = useNavigate();
   let myDispatch = useDispatch();
   //@ts-ignore
   const ListUser: Array<user> = useContext(UserContext).listUsers;

   const currPass: any = refPassword.current;
   const currName: any = refName.current
   let currUser: user | null = null;

   const IsUserExists = () => {
      if (currName.value == "") {
         currName.style.borderColor = "red";
         //@ts-ignore
         refName.current.placeholder = "Enter Name"
      }
      if (currPass.value === "") {
         currPass.style.borderColor = "red";
         //@ts-ignore
         refPassword.current.placeholder = "Enter Password"
      }

      for (let i = 0; i < ListUser.length; i++) {
         if (ListUser[i].name == currName.value && ListUser[i].password == currPass.value) {
            alert(ListUser[i].password)
            currUser = ListUser[i]
            myDispatch({ type: 'CurrUser', payload: currUser })
            navigate('/myHome');
            return
         }

      }
      myDispatch({ type: 'CurrUser', payload: currUser })
      navigate('addUser_signUp');




      // const foundUser = ListUser.filter(user => user.name === currName && user.password === currPass)[0];

      // if (foundUser?.hasOwnProperty('name')) 
      // {
      //    myDispatch({ type: 'CurrUser', payload: foundUser });
      //    navigate('/myHome');
      // } 
      // else 
      //   navigate('/addUser_signUp');
   }

   return <>
      <img className="image" src={image}></img>
      <div className="form-box">
         <h2>Log in</h2>
         <div className="text"></div>
            <div className="inputbox">
               <label>enter user name:</label>
               <input ref={refName}></input>
            </div>
            <br></br>
            <div className="inputbox">
               <label>enter a password:</label>
               <input ref={refPassword} placeholder="" id='pass'></input>
            </div>
            <button type="submit" onClick={IsUserExists}>ok</button>
            <Outlet></Outlet>
         </div>
   </>
}

export default Users;
