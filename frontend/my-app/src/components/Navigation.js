import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Navigation.css";
import profImage from "../assets/user-img.png"
import logo from "../assets/logo.png"

function Navigation() {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return(
        <div className="navigation-bar">

            {
                auth ? 

                

                <ul>

                    <div className="logo"><img src={logo} alt="logo"></img></div> 

                    <li><Link to={"/homepage"} >HomePage</Link></li>



                    <li>

                        <div className="navbar">
                            <div className="menu">
                                <p>Profile</p>    
                                <div className="submenu"> 
                                    <div className="profile-details">
                                        <img src={profImage} alt="profile"></img>
                                        <p><strong>Name :-</strong>{JSON.parse(auth).name}</p>
                                        <p><strong>Email :-</strong>{JSON.parse(auth).email}</p>

                                    </div>   
                                </div>
                            </div>
                        </div> 

                    </li>


                    <li><Link onClick={logout} to="/">Logout </Link></li>
                    
                </ul>

                :

                <ul>
                    <div className="logo"><img src={logo} alt="logo"></img></div> 
                    <li><Link to={"/signup"}>SignUp</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                   
                </ul>
            }

            
            

        </div>
    )
}

export default Navigation;

