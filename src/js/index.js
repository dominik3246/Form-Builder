import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Create from './components/Create.jsx';
import Preview from './components/Preview.jsx';
import Export from './components/Export.jsx';
import Nav from './components/Nav.jsx';

ReactDOM.render(
  <Router>
    <div className="container">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link className="nav__link" to="/create">
              Create
            </Link>
          </li>
          <li className="nav__list-item">
            <Link className="nav__link" to="/preview">
              Preview
            </Link>
          </li>
          <li className="nav__list-item">
            <Link className="nav__link" to="/export">
              Export
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        {['/create', '/'].map(path => <Route exact component={Create} path={path} />)}
        <Route exact component={Preview} path="/preview" />
        <Route exact component={Export} path="/Export" />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root'),
);
