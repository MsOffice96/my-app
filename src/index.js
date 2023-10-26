import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

import { Calculator } from "./temperature"
import { SignUpDialog, WelcomDialog } from "./component_include_other_component";


  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SignUpDialog />);