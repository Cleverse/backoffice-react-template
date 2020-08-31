import React from "react";
import { LoginPage } from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";

import { Sidebar } from "./feature/common/Sidebar";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex">
        <Sidebar />
        <div className="w-full min-h-screen ">
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
