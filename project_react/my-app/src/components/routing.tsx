import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import AddUser from "./addUser";
import List from "./list";
import Menu from "./menu";
import ShowUsers from "./showUsers";
import Users from "./users";
import AddDestination from "./AddDestination";
import myStore from '../store/store';
import { Provider, useSelector } from "react-redux";

const Routing = () => 
{
   return (
      <Provider store={myStore}>
         <div>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Menu />}>
                     <Route path="/" element={<Navigate to="/myHome" />} />
                     <Route path="myHome" element={<Home />} />
                     <Route path="about" element={<About />} />
                     <Route path="login" element={<Users />} />
                     <Route path="showUsers" element={<ShowUsers />} />
                     <Route path="/list/:Destination" element={<List />} />
                     <Route path="login/addUser_signUp" element={<AddUser />} />
                     <Route path="/AddDestination" element={<AddDestination />} />
                     {/* {flag && <Navigate to="/login" />} */}
                  </Route>
               </Routes>
            </BrowserRouter>
         </div>
      </Provider>
   );
};

export default Routing;
