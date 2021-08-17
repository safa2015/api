
import './App.css';
import  UserList  from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import UserDetail from './UserDetail';
function App() {
  return (
    <Router>
    <div className="App">
     
        <Switch>
          <Route path="/" exact component={UserList}/>
          <Route path="/:id" render={(props )=> <UserDetail {...props}/>}/>

        </Switch>
     
      
 <UserList/>
    </div>
    </Router>
  );
}

export default App;

