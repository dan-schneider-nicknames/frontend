import { Switch, Route } from "react-router-dom"
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Nicknames from "./components/pages/Nicknames"

function App() {
  return (
    <Switch>
      <Route path="/signup">
        <Login/>
      </Route>
      <Route path="/login">
        <Signup/>
      </Route>
      <PrivateRoute path="/nicknames">
        <Nicknames/>
      </PrivateRoute>
    </Switch>
  );
}

export default App;
