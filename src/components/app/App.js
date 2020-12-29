import React from 'react';
import {Switch, Route,  BrowserRouter as Router} from 'react-router-dom';



import {HomePage} from '../../pages/home-page/HomePage'


function App() {


  return (
    <Router>
      <Switch>
        <Route path="/"  exact>
            <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
