import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import {render} from 'react-dom';

render(
<BrowserRouter>
    <App />
</BrowserRouter>, 
document.getElementById("root"));
