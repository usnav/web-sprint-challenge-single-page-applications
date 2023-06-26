import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Pizza from "./Assets/Pizza.jpg";
import Home from "./Home";
import axios from "axios";
import schema from './Validation/formSchema'
import * as yup from "yup";
import PizzaForm from "./PizzaForm";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  toppings: {
    pepperoni: false,
    pineapple: false,
    ham: false,
    olives: false,
    bacon: false,
    cheddar: false
  },
  special: ""
};

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  special: ''
};

const initialDisabled = true;
const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  

  // const navigate = useNavigate();

  // const handleClick = () => {
  //     navigate("pizza");
  //   }

  const validate = (name, value) => {

    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    });
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({
        ...formValues, 
        toppings: {
            ...formValues.toppings, 
            [name]: isChecked
        }
    });
};

  const postNewFriend = (e) => {

    axios.post('https://reqres.in/api/orders', formValues)
    .then(() => {
       // console.log(res.data.data)
        setFormValues(initialFormValues);
     })
    .catch(err => {
        console.log(err)
        // debugger
    })
}


const handleSubmit = () => {
  const newFriend = {
      name: formValues.name.trim(), 
      size: formValues.size.trim(), 
      sauce: formValues.sauce.trim(), 
      toppings: Object.keys(formValues.toppings).filter(
          hob => formValues.toppings[hob]
      ), 
      special: formValues.special.trim()
  };
  postNewFriend(newFriend);
};

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
      <nav className="navbar">
      
        <Link to="/">Home</Link>
    
        
        <Link id="order-pizza" to="pizza">Order</Link>
        
      </nav>
      <h1>Bloomtech Eats</h1>
      <img src={Pizza} alt="pizza"></img>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<PizzaForm   
                values = {formValues}
                change = {handleChange}
                submit = {handleSubmit}
                disabled = {disabled}
                errors = {formErrors}
                checked = {checkboxChange}
                />} />

      </Routes>
    </div>
  );
};
export default App;
