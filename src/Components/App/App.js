import {Container, Paper} from '@material-ui/core';
import Login from '../Login/Login.jsx';
import Logout from '../Logout/Logout.jsx';
import RouteTest from '../RouteTest/RouteTest.jsx';
import Post from '../Post/Post';

function App() {


  return (
    <Container>
      <Paper>
        <Login />
        <Logout />
        <RouteTest/>
        <Post/>
      </Paper>
    </Container>
  );
}

export default App;
