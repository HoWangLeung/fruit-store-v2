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
import DefaultContainer from './Others/Router/DefaultContainer';
import LoginContainer from './Others/Router/LoginContainer';


function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/auth/sigin" component={LoginContainer} />
        <Route exact path="/" component={DefaultContainer} />

      </div>
    </Switch>
  );
}

export default App;
