import { Outlet, useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => 
{
    //מעבר לדף אחר
    let Add=useNavigate()

    const IsPasswordDirrector=()=>
    {
       //@ts-ignore
       if(document.getElementById("Password").value == "12345678")
         Add('AddRecipe')
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input id="user" placeholder="UserName" type="text" />
            <br />
            <input id="Password" placeholder="Password" type="password" />
            <input id="login" type="submit" onClick={()=>IsPasswordDirrector()}></input>
            <Outlet></Outlet> 
        </div>
    );
};

export default Login;









