import "./App.css"
import React from "react";
import { 
  createHashRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

import { Dog, dataLoader } from "./routes/Dog.jsx"
import { Cat } from "./routes/Cat.jsx";
import { Fox } from "./routes/Fox.jsx";

import { Anime } from "./routes/anime/Anime";
import { Clock } from "./routes/clock/Clock";
import { Home } from "./routes/home/Home"
import { Jokes } from "./routes/jokes/Jokes";
import { Weight } from "./routes/weight/Weight";

export function App(props) {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/weight" element={<Weight />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <div className="container">

      <nav className="link">
        <Link className="item" to="/">🏡</Link>
        <Link className="item" to="/clock" >⏰</Link>        
        <Link className="item" to="/anime">👱‍♀️</Link>
        <Link className="item" to="/weight" >⚖️</Link>
        <Link className="item" to="/Jokes">🤣</Link>        
      </nav>

      <div className="outlet">
        <Outlet />
      </div>
      
    </div>
  )
}