import './App.css';
import './bootstrap.css'
import { useEffect, useState } from 'react';
import { MyProvider } from './ourContext';
import axios from 'axios';
import { user } from './class/user';
import Routing from './components/routing';

function App() 
{
  //שליפת כל המשתמשים 
  const [listUsers, setListUsers]= useState<Array<user>>()
  
  useEffect(()=>{
   axios.get('http://localhost:7777/myUsers/getAll').then(v=>setListUsers(v.data))})
  
   const transferUsers={
    listUsers: listUsers,
    setListUsers: setListUsers
   }

  return (
    <div className="App">
      {/* <div className='alert-danger'>Site</div> */}
      <MyProvider value={transferUsers}>
        <Routing></Routing>
      </MyProvider>
    </div>
  );
}

export default App;


