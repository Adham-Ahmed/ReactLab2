import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Day2/Routing/Header";
import About from './Components/Day2/Routing/About'
import Error from './Components/Day2/Routing/Error'
import Home from './Components/Day2/Routing/Home'
// import Search from "./Components/Day2/ComponentInteraction/Search";
// import Students from "./Components/Day2/ComponentInteraction/Students";
// import StudentsList from './Components/Day2/ComponentInteraction/students.json'
// import Users from './Components/Day2/Routing/Users'
// import USerDetails from './Components/Day2/Routing/USerDetails'
// import UserDetails from "./Components/Day2/Routing/USerDetails";

let App = ()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
//#endregion

//#endregion