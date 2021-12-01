import { Switch, Route } from "react-router-dom"
import PrivateRoute from "./components/common/PrivateRoute";

function App() {
  return (
    <Switch>
      <Route path="/signup" />
      <Route path="/login" />
      <PrivateRoute path="/nicknames" />
    </Switch>
  );
}

export default App;
