import logo from './logo.svg';
import './App.scss';
import Store from './Components/Store/Store';
import { Route, Switch } from 'react-router-dom';
import WhatsappIcon from './Components/Others/WhatsappIcon/WhatsappIcon';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Others/Banner/Banner'
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Footer from './Components/Others/Footer/Footer'
import DefaultContainer from './Components/Others/Router/DefaultContainer';
import LoginContainer from './Components/Others/Router/LoginContainer';
import SignUp from './Components/Authentication/SignUp';


function App() {
  return (
    <Switch>


      <Route exact path="/auth/signin" render={props => <LoginContainer />} />
      <Route exact path="/auth/signup" render={props => <SignUp />} />
      <Route>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <NavBar />
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
