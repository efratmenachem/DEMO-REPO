import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const Menu =()=>
{
  let user = useSelector((l:any)=>l.currUser) 
  let userName=user==null?" ":user.name;

  const css: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    border: "none",
    padding: "0.5% 0.3%", 
  };
  
  const css2: CSSProperties = {
    color: "rgba(255, 255, 255)",
    fontSize: "134%" // ניסיון לשנות גודל הכתב
  }
  
  return <> 
    <nav className="navbar navbar-inverse" style={css}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" style={css2}> Main Menu </a>
          </div>
          <ul className="nav navbar-nav">
            {/* {(user.hasOwnProperty('isManager')) && (*/}<li ><Link to='/myHome'  style={css2}> HomePage </Link></li>{/*)}*/ }
            <li>
              <Link to='/about'  style={css2}> About us </Link>
            </li>
              {(user?.isManager) && (<li><Link to='/showUsers'  style={css2}>users</Link></li>)}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a  style={css2}>user {userName}</a></li>
           <li><Link to='login/addUser_signUp'  style={css2}>sign up</Link></li>
           <li><Link to='/login'  style={css2}> Login</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>  
      </>
}
export default Menu;