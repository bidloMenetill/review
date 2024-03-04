import ReactDOM from "react-dom/client";

import "./app/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./app/routes/Routing";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
