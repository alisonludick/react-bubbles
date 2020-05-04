import React from "react";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import AddColor from "./components/AddColor";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Route
          exact
          path='/api/colors'
          render={props => {
            if (localStorage.getItem('payload')) {
              return <BubblePage {...props} />
            }
            return <Redirect to='/' />
          }}
        />
         <Route
          exact
          path='/addcolor'
          render={props => {
            if (localStorage.getItem('payload')) {
              return <AddColor {...props} />
            }
            return <Redirect to='/api/login' />
          }}
        />
      </div>
    </Router>
  );
}

export default App;
