import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import PizzaApp from "./PizzaApp";
import Pizza from "./Pizza";
import PizzaForm from "./PizzaForm";


const App = () => {

    
      const navigate = useNavigate();

    const handleClick = () => {
      navigate("/pizza");
    }

  return (
    <>
      <nav className="navbar">
        <button onClick={handleClick} id="order-pizza"><Link to="/">Home</Link></button>
        <button id="pizza-form"><Link to="/pizza">Pizzas</Link></button>
      </nav>
      <h1>Bloomtech Eats</h1>
      <img src={Pizza} alt="pizza"></img>
      <Routes>
      <Route path="/pizza" component={PizzaApp}/>
      </Routes>
    </>
  );
};
export default App;
