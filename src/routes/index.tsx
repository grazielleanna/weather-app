import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { Login } from "../pages/login";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/forecast" component={Dashboard} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
}

export default Routes;
