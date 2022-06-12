import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import { NavBar } from './Models/NavBar'
import { Banner } from './Models/Banner'

import './Global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Banner />
    </BrowserRouter>
  </React.StrictMode>
)




