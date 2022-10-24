import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Builder } from '@builder.io/react';
import { ProductBox } from './components/ProductBox';
import { CatchallPage } from './components/CatchallPage';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/product">Builder Page 1</Link>
          </li>
          <li>
            <Link to="/page-2">Builder Page 2</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route render={({ location }) => <CatchallPage key={location.key} />} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}




Builder.registerComponent(ProductBox, {
  name: 'ProductBox',
  inputs: [
    {
      name: 'product',
      type: 'BigCommerceProductPreview',
    },
  ],
});


export default App;
