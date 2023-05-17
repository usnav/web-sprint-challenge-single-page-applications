import React from "react";
import { Route, Link } from "react-router-dom";
import PizzaApp from "./PizzaApp";


const App = () => {
  return (
    <>
      <nav className="navbar">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/pizza">Pizzas</Link></button>
      </nav>
      <h1>Bloomtech Eats</h1>
      <img src={Pizza} alt="pizza"></img>
      <Route path="/pizza" component={PizzaApp}/>
    </>
  );
};
export default App;
