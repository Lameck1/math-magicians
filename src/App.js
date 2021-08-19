import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Home from './components/Home';
import Quote from './components/Quote';
import homeData from './data/homeData';
import QUOTE from './data/quoteData';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, text } = homeData;
    return (
      <Router>
        <main className="App d-flex">
          <header className="d-flex">
            <div>
              <span>
                <Link to="/" className="logo">Math Magicians</Link>
              </span>
            </div>
            <nav>
              <ul className="nav-links d-flex">
                <li>
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                  <Link to="/calculator" className="nav-link">Calculator</Link>
                </li>
                <li>
                  <Link to="/quote" className="nav-link">Quote</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/quote">
              <Quote quote={QUOTE} />
            </Route>
            <Route path="/">
              <Home title={title} text={text} />
            </Route>
          </Switch>
          <Footer />
        </main>
      </Router>
    );
  }
}
