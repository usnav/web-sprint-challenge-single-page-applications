import React, { useState, useEffect } from "react";
import Pizza from './Pizza';
import PizzaForm from './PizzaForm';
import axios from "axios";
import schema from './Validation/formSchema'
import * as yup from "yup";


const initialFormValues = {
    name:"",
    size:"",
    sauce:"",
    toppings: {
        pepperoni: false,
        pineapple: false, 
        ham: false,
        olives: false, 
        bacon: false, 
        cheddar: false
    }, 
    special:""
};

const initialFormErrors = {
    name: ''
};

const initialPizzas = [];
const initialDisabled = true;

export default function PizzaApp() {

    const [friends, setFriends] = useState([initialPizzas]);
    const [formValues, setFormValues] = useState(initialFormValues);

    axios
        .post("https://reqres.in/api/users", newFriend)
        .then((res) => {
            setFriends([...friends, res.data]);
        })
        .catch((err) => {
            debugger;
        })
        .finally(() => {
            setFormValues(initialFormValues);
        });




const inputChange = (name, value) => {
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

const submit = () => {
    const newFriend = {
        name: formValues.name, 
        size: formValues.size, 
        sauce: formValues.sauce, 
        toppings: Object.keys(formValues.toppings).filter(
            (hob) => formValues.toppings[hob]
        ), 
        special: formValues.special
    };
    postNewFriend(newFriend);
};

return (
    <div className="App">
        <div className="container">
            <header>
                <h1> Pizza </h1>
            </header>

            <PizzaForm
                values = {formValues}
                inputChange = {inputChange} 
                checkboxChange = {checkboxChange}
                submit = {submit}
                />

                {friends.map((friend) => {
                    return <Pizza key={friend.id} details={friend} />;
                })}
        </div>

    </div>
);
            
}
