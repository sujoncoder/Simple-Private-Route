import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import AuthProvider from './Contex/AuthProvider';
import Shiping from './Components/Shiping/Shiping';
import PrivateRoute from './Components/PrivatRoute/PrivateRoute';
import Placeorder from './Components/PlaceOrder/Placeorder';


function App() {
  return (
    <div>
    <AuthProvider>
    <Router>
       <Header></Header>
       <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path="/shiping">
        <Shiping></Shiping>
        </PrivateRoute>
        <PrivateRoute path="/placeorder">
        <Placeorder></Placeorder>
        </PrivateRoute>
       </Switch>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
