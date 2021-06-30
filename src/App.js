import logo from './logo.svg';
import './App.scss';
import Store from './Store/Store';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">


      <Switch>
        <Route exact path="/" render={props => <Store  {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
