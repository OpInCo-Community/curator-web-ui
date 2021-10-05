import "./App.css";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import LoginPage from "./Pages/Login";
import Sample from "./Pages/Sample";

function App() {
  return(
  <Router>
    <Switch>
     <Route path='/' exact>
      <Sample/>
     </Route>
     <Route path='login' exact>
     <LoginPage/>
     </Route>
    </Switch>
  </Router>
  )
}

export default App;
