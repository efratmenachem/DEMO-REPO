import React, { useRef } from "react"

export const MyForm=()=>{

   const check=()=>{
      let n:any = myName.current 
      let p:any = myPassword.current

      if(n.value=="" || p.value=='')
      {
         n.focus = true
         n.style.backgroundColor="red"
      }
   }
//ref - מצביע לאלמנט בדום
let myName=useRef(null)
let myPassword=useRef(null)

   return <div> 
      <input ref={myName} placeholder="enter name"></input>
      <input ref={myPassword} placeholder="enter password"></input>
      <input type="submit" onClick={()=>{check()}}></input>
   </div>
}

export default MyForm