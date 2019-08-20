import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../Pages/Home';
import ListPage from '../Pages/ListPage';
import DataPage from '../Pages/DataPage';

import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <React.Fragment>
        <Navbar />

        <main className="App__Main">
          <div className="App__Main__Row">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pet-list" exact component={ListPage} />
                <Route path="/pet-data" exact component={DataPage} />
              </Switch>
          </div>
        </main>
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default App;
