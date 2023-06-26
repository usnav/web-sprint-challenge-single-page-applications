import React from "react";



export default function PizzaForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
    checked
  } = props;


  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  
  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checked(name, checked);
  };

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return (
    <div>
      <h2>Build Your Own Pizza</h2>
      <form className="form container" id="pizza-form" onSubmit={onSubmit}>


        <div className="name">
          <label htmlFor="name-input">
            Name:
          </label>
          <input
            type="text"
            id="name-input"
            name="name"
            placeholder="Enter your Name"
            // value={name}
            onChange={onChange}
          />
          <p style={{ color: "red" }}> {errors.name}
          </p>
        </div>

        <div className="size-dropdown">
          <h3>Pizza Size:</h3>
          <select
            id="size-dropdown"
            name="size"
            onChange={onChange}>

            <option selected value="select">
              Select
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">Extra Large</option>
          </select>
          {/* <p style={{ color: "red" }}> {errors.name}
          </p> */}
        </div>

        <div className="toppings">
          <h3>Pick a Sauce </h3>
          <label>
            Original Red
            <input
              type="radio"
              name="sauce"
              value="red"
              // checked={values.sauce === "red"}
              onChange={onChange}
            />
          </label>
          <label>
            Garlic Ranch
            <input
              type="radio"
              name="sauce"
              value="ranch"
              // checked={values.sauce === "ranch"}
              onChange={onChange}
            />
          </label>
          <label>
            BBQ Sauce
            <input
              type="radio"
              name="sauce"
              value="bbq"
              // checked={values.sauce === "bbq"}
              onChange={onChange}
            />
          </label>
          <label >
            Spinach Alfredo
            <input
              type="radio"
              name="sauce"
              value="spinach"
              // checked={values.sauce === "spinach"}
              onChange={onChange}
            />
          </label>


        </div>

        <div className="toppings">
          <h3>Choose a Topping</h3>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              // checked={values.toppings.pepperoni}
              onChange={onChange}
            />
          </label>

          <label>
            Pineapple
            <input
              type="checkbox"
              name="pineapple"
              // checked={values.toppings.pineapple}
              onChange={onChange}
            />
          </label>

          <label>
            Ham
            <input
              type="checkbox"
              name="ham"
              // checked={values.toppings.ham}
              onChange={onChange}
            />
          </label>
          <label>
            Olives
            <input
              type="checkbox"
              name="olives"
              // checked={values.toppings.olives}
              onChange={onChange}
            />
          </label>

          <label>
            Bacon
            <input
              type="checkbox"
              name="bacon"
              // checked={values.toppings.bacon}
              onChange={onChange}
            />
          </label>

          <label>
            Cheddar
            <input
              type="checkbox"
              name="cheddar"
              // checked={values.toppings.cheddar}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="instructions">
          <label>Special Intructions:
            <input
              id="special-text"
              type="text"
              name="special"
              // value={values.special}
              onChange={onChange}
            />
          </label>

        </div>
        <div className="button">
        <button htmlFor="order-button" id="order-button" >submit</button>
        </div>
      
      </form>

    </div>




  )

};