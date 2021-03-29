import {Container, Paper} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Login from '../Login/Login.jsx';
import Logout from '../Logout/Logout.jsx';
import Auction from '../Auction/Auction.jsx';
import Post from '../Post/Post';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import ProtectedRoute from '../Routes/ProtectedRoute';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

function App() {
  const loginReducer = useSelector(state => state.loginReducer);

  return (
    <Router>
      <Container>
        <Paper>
          {loginReducer.email ? <p>Logged In</p>:<p>Not logged in</p>}
          <Login />
          <Logout />
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing}/>
            <ProtectedRoute exact path="/auction" component={Auction}/>
            
            <Post/>
          </Switch>
          
        </Paper>
      </Container>
    </Router>
  );
}

export default App;
