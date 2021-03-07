import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import Card from './components/Card';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style.css';
function App() {

  return (
   <div className="app">
     <Router>
    
       <Switch>
         <Route path="/register" component={Register}/>
         <Route path="/login" component={Login} />
         <Route path="/"  component={Home} /> 
       </Switch>
     </Router>
   </div>
  );
}

export default App;
