
import './App.css';
import logo from './images/logo.png';
import Department from './components/Department';
import About from './components/About'
import { Switch,Route ,BrowserRouter as Router,NavLink  }from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import Download from './components/Download';
function App() {
  return (
   
    <>
    <Router>        
    <div className="navBar">
    <div className="containeer">
        <img src={logo} alt="NIT Jalandhar" width="80px"/>
        <h2 id="d-name">Department Of <span>Computer Science and Engineering</span></h2>
        <ul>
        
            <li> <NavLink exact={true} activeClassName='is-active' to="/"> Home</NavLink ></li>
            <li> <NavLink  activeClassName='is-active' to="/department"> Department </NavLink ></li>
            
            <li> <NavLink  activeClassName='is-active' to="/contact"> Contact  </NavLink ></li>
            <li>  <NavLink activeClassName='is-active'  to="/about">About us</NavLink ></li>
        </ul>
    </div>
</div>



<div className="line">

</div>

   <Switch>
   
   <Route path="/" component={HomePage} exact/>
   <Route path="/department" component={Department}/>
   <Route path="/about" component={About}/>
   <Route path="/contact" component={Contact}/>
   
   <Route path="/downloads" component={Download}/>
   <Route path="/" component={PageNotFound}/>
   </Switch>
   </Router>
</>

  );
}

export default App;
