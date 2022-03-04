import logo from './logo.svg';
import './App.scss';
import Store from './Components/Store/Store';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import WhatsappIcon from './Components/Others/WhatsappIcon/WhatsappIcon';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Others/Banner/Banner'
import Container from '@material-ui/core/Container';
import { Divider, Grid, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Footer from './Components/Others/Footer/Footer'
import DefaultContainer from './Components/Others/Router/DefaultContainer';
import LoginContainer from './Components/Others/Router/LoginContainer';
import SignUp from './Components/Authentication/SignUp';
import { useSelector } from 'react-redux';
import Cart from './Components/Store/Cart/Cart';
import Checkout from './Components/Store/Checkout/Checkout';
import { SnackbarProvider } from 'notistack';
import CheckoutSuccess from './Components/Store/Checkout/Result/CheckOutSuccess'
import Profile from './Components/Profile/Profile';
import { HashRouter as Router } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import OAuth2RedirectHandler from './Components/Authentication/SocialLogin/OAuth2RedirectHandler';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#01BFA6",
      contrastText: "#fff" //button text white instead of black
    },


  },

})

function App() {
  const history = useHistory()
  const isAuthenticated = useSelector(state => state.AuthenticationReducer.isAuthenticated)
 
  return (
    <ThemeProvider theme={theme}>
      <Router  >
        <Switch>

          <Route exact path="/:lang/checkout" render={props => <Checkout isAuthenticated={isAuthenticated} {...props} />} />
          <Route exact path="/:lang/checkout/success" render={props => <CheckoutSuccess {...props} />} />
          <Route exact path="/:lang/auth/signup" render={props => <SignUp {...props} />} />
          <Route exact path="/:lang/cart" render={props => <Cart isAuthenticated={isAuthenticated} {...props} />} />
          <Route exact path="/:lang/auth/signin" render={props => <LoginContainer {...props} />} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
          <Route exact path="/:lang/user/settings" render={props => <Profile isAuthenticated={isAuthenticated} {...props} />} />
          <Route render={props => <DefaultContainer isAuthenticated={isAuthenticated} />} />

        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;