import React from "react";
import  ReactDOM  from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import ErrorComponent from "./components/Error";



const Applayout = () =>{
    return(
        <div className="app">
        <Header/>
        <Body/>
        </div>
    );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Applayout/>,
    errorElement: <ErrorComponent/>,
  },
  {
    path:"/about",
    element: <About/>,
    
  },
  {
    path:"/Contact",
    element: <Contact/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);