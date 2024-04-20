import React from "react"

//יצירת מאגר
const UserContext=React.createContext({})

//ספק המידע
export const MyProvider=UserContext.Provider
export default UserContext