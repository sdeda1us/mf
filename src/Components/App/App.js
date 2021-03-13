import './App.css';
import Login from '../Login/Login.jsx';
import Logout from '../Logout/Logout.jsx';
import RouteTest from '../RouteTest/RouteTest.jsx';
import Post from '../Post/Post';

function App() {


  return (
    <div className="App">
      <Login />
      <Logout />
      <RouteTest/>
      <Post/>
      
    </div>
  );
}

export default App;
