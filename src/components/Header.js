import { useEffect, useState } from "react";

const Header = () => {
    let btnName = "Login"; // it is the normal javascript variable 
    const[btnNameReact, setBtn] = useState("Login"); // this is the state variable
    console.log("Header render");
    //if there is no dependency array -> useEffect is called on every component render
    //if dependency array is empty -> useEffect is called only on initial render and just once
    //if there is a dependency then useEffect will render the component only if there in a change in the dependency.
    useEffect(() => {
        console.log("useEffect called");
    },[]);
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className="logo" src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x0"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className = "Login" onClick={() => {setBtn("LogOut");}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;