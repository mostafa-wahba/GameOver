import "./App.css";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Notfound from "./Notfound/Notfound";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Gamedetails from "./Gamedetails/Gamedetails";
import Pc from "./Pc/Pc";
import Browser from "./Browser/Browser";
import All from "./All/All";
import ReleaseDate from "./Components/ReleaseDate";
import Popularity from "./Components/Popularity";
import Alphabetical from "./Components/Alphabetical";
import Relevance from "./Components/Relevance";
import Racing from "./Components/Racing";
import Sports from "./Components/Sports";
import Action from "./Components/Action";
import ActionRbg from "./Components/ActionRbg";
import BattleRoyale from "./Components/BattleRoyale";
import Fantasy from "./Components/Fantasy";
import Fight from "./Components/Fight";
import OpenWorld from "./Components/OpenWorld";
import Shooter from "./Components/Shooter";
import Social from "./Components/Social";
import Zombie from "./Components/Zombie";
import ProtectedRoute2 from "./ProtectedRoute/ProtectedRoute2";

function App() {
  
  useEffect(()=>{
    if (localStorage.getItem("userToken")!==null) {
      saveUserData()
    }
  },[])
  const [userData, setUserData] = useState(null);
  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
    console.log(userData);
  }
  const routing = createHashRouter([
    {
      path: "",
      element: <Layout saveUserData={saveUserData} userData={userData}/>,
      children: [
        { index: true, element: <ProtectedRoute2><Login saveUserData={saveUserData}/></ProtectedRoute2> },
        { path: "home", element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: "games", element: <ProtectedRoute><All /></ProtectedRoute> },
        {path: "platforms/pc", element: <ProtectedRoute><Pc /></ProtectedRoute>},
        {path: "platforms/browser", element: <ProtectedRoute><Browser /></ProtectedRoute>},
        {path: "sortby/releasedate", element: <ProtectedRoute><ReleaseDate /></ProtectedRoute>},
        {path: "sortby/popularity", element: <ProtectedRoute><Popularity /></ProtectedRoute>},
        {path: "sortby/alphabetical", element: <ProtectedRoute><Alphabetical /></ProtectedRoute>},
        {path: "sortby/relevance", element: <ProtectedRoute><Relevance /></ProtectedRoute>},
        {path: "category/racing", element: <ProtectedRoute><Racing /></ProtectedRoute>},
        {path: "category/sports", element: <ProtectedRoute><Sports /></ProtectedRoute>},
        {path: "category/social", element: <ProtectedRoute><Social /></ProtectedRoute>},
        {path: "category/shooter", element: <ProtectedRoute><Shooter /></ProtectedRoute>},
        {path: "category/openworld", element: <ProtectedRoute><OpenWorld /></ProtectedRoute>},
        {path: "category/zombie", element: <ProtectedRoute><Zombie /></ProtectedRoute>},
        {path: "category/fantasy", element: <ProtectedRoute><Fantasy /></ProtectedRoute>},
        {path: "category/actionrpg", element: <ProtectedRoute><ActionRbg /></ProtectedRoute>},
        {path: "category/action", element: <ProtectedRoute><Action /></ProtectedRoute>},
        {path: "category/fight", element: <ProtectedRoute><Fight /></ProtectedRoute>},
        {path: "category/battleroyale", element: <ProtectedRoute><BattleRoyale /></ProtectedRoute>},
        { path: "gamedetails/:id", element: <ProtectedRoute><Gamedetails /></ProtectedRoute> },
        { path: "login", element: <ProtectedRoute2><Login saveUserData={saveUserData} /></ProtectedRoute2> },
        { path: "register", element: <ProtectedRoute2><Register /></ProtectedRoute2> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routing} />
    </>
  );
}

export default App;
