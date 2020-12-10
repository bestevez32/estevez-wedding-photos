import React from "react";
import { render } from "react-dom";
import PageOne from "./components/pageOne";
import PageTwo from "./components/pageTwo";
import PageThree from "./components/pageThree";
import './assets/css/index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  let history = useHistory();
  console.log(history)
  return (
    <div className='flexWrapper'>
      <div className='titleWrapper'>
        <div className='title'>Amanda & Brandon</div>
        <div className='subTitle'>November 5th, 2020 </div>
      </div>
        <Router>
        <div className='navigation'>
          <div><Link to="/">Page One</Link></div>
          <div> <Link to="/page-two">Page Two</Link></div>
          <div> <Link to="/page-three">Page Three</Link></div>
        </div>
          <Switch>
            <Route path="/page-three" component={PageThree}/>
            <Route path="/page-two" component={PageTwo}/>
            <Route path="/" component={PageOne}/>
          </Switch>
        </Router>
      <div className='footerWrapper'>
        <a href="https://www.blackbutteranch.com/weddings/elopements/" target="blank">Black Bute Ranch</a>
        <a href="https://www.instagram.com/lucyfotomama/?hl=en" target="blank">Lucy Hobbs Photography</a>
      </div>
    </div>
  );
}
render(<App />, document.getElementById("root"));
