import './App.css';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Movies from './Component/Movies';
import Favourite from './Component/Favourite';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/"  exact render={(props)=>(
            <>
              <Banner {...props}/>
              <Movies {...props}/>
            </>
        )}/>
        <Route path="/favourites" component={Favourite}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
