import logo from './logo.svg';
import './App.scss';
import Store from './Store/Store';
import { Route, Switch } from 'react-router-dom';
import WhatsappIcon from './Others/WhatsappIcon/WhatsappIcon';
import NavBar from './NavBar/NavBar';
import Banner from './Others/Banner/Banner'
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Footer from './Others/Footer/Footer'
function App() {
  return (
    <div className="App">

      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        >

        <NavBar />
        <Banner />
        <Switch>
          <Route exact path="/" render={props => <Store  {...props} />} />
        </Switch>
        <Footer />
      </Grid>

      <WhatsappIcon />
    </div>
  );
}

export default App;
