
import './App.css';
import {BrowserRouter as Router,  Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Downbar from './components/Downbar/Downbar'
import Search from './components/Search/Search'
import Collection from './components/Collection/Collection'
import User from './components/User/User'
import SignUp from './components/User/SignUp'
import ProductDescription from './components/ProductDescription/ProductDescription'
// import upload from './upload/upload'
import Cart from './components/Cart/Cart'
import Orders from './components/Orders/Orders'

function App() {


  return (
    <div className="App">
      <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/search'  component={Search} />
      <Route path='/collection'  component={Collection} />
      <Route path='/login'  component={User} />
      <Route path='/signup'  component={SignUp} />
      <Route path='/shop/:id' component={ProductDescription} />
      <Route path='/search/:id' component={Search} />
      <Route path='/cart' component={Cart} />
      <Route path='/orders' component={Orders} />
    </Switch>
    <Downbar />
   
    
    </Router>
 
    </div>
  );
  
}



export default App;
