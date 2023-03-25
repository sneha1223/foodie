
import './App.css';
import Home from './Pages/Home'
import Menus from './Pages/Menus'
import Reservation from './Pages/Reservation'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'


import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (

   
    <div className="App">
    <Router>
   <Route exact path={'/'}>
    <Home /> 
    </Route>  

    <Route path={'/about'}>
    <About />
    </Route>
    
    <Route path={'/menus'}>
    <Menus />
    </Route>

    <Route path={'/res'}>
    <Reservation />
    </Route>

    <Route path={'/contact'}>
    <Contact />
    </Route>

    <Route path={'/login'}>
    <Login />
    </Route>
    <Route path={'/signup'}>
    <Signup />
    </Route>

    </Router>  
    </div>
    
  );
}

export default App;
