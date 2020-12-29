import React from 'react';
import {Switch, Route,  BrowserRouter as Router, Redirect} from 'react-router-dom';



import {HomePage} from '../../pages/home-page/HomePage'


function App() {


  return (
    <Router basename="/test_task2">
      <Switch>
        <Route path="/"  exact>
            <HomePage/>
        </Route>
            <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
