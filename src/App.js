import logo from './logo.svg';
import './App.scss';
import Store from './Components/Store/Store';
import { Route, Switch } from 'react-router-dom';
import WhatsappIcon from './Components/Others/WhatsappIcon/WhatsappIcon';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Others/Banner/Banner'
import Container from '@material-ui/core/Container';
import { Divider, Grid } from '@material-ui/core';
import Footer from './Components/Others/Footer/Footer'
import DefaultContainer from './Components/Others/Router/DefaultContainer';
import LoginContainer from './Components/Others/Router/LoginContainer';
import SignUp from './Components/Authentication/SignUp';
import { useSelector } from 'react-redux';
import Cart from './Components/Store/Cart/Cart';
import Checkout from './Components/Store/Checkout/Checkout';


function App() {
  const isAuthenticated = useSelector(state => state.AuthenticationReducer.isAuthenticated)
  console.log("isAuthenticated: ", isAuthenticated);

  return (
    <Switch>

      <Route exact path="/checkout" render={props => <Checkout {...props} />} />
      <Route exact path="/auth/signup" render={props => <SignUp {...props} />} />
      <Route exact path="/cart" render={props => <Cart {...props} />} />
      <Route exact path="/auth/signin" render={props => <LoginContainer {...props} />} />
      <Route>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <NavBar isAuthenticated={isAuthenticated} />
          <Banner />
          <Route exact path="/" render={props => <Store  {...props} />} />
        
          <Footer />
          <WhatsappIcon />
        </Grid>
      </Route>


    </Switch>
  );
}

export default App;
