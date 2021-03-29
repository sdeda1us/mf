import {Container, Paper} from '@material-ui/core';

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

  return (
    
      <Router>
        <Container>
          <Paper>
            
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
