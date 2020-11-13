import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    localStorage.removeItem('token')
    setIsLoading(false)
  }
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={(props) => {
          return <Login {...props} setIsLoading={setIsLoading}/> }} />
        <PrivateRoute exact path='/colors' component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
