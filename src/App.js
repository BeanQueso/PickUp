import './App.css';
import Header from './components/Header'
import {Dimensions} from 'react-native';

import logo from './logo.webp';
import bg1 from './media/1.png'
import bg2 from './media/2.webp'
import bg3 from './media/3.png'



function App() {
  return (
    <div className = "App" style={{height:"100%"}}>
      <Header style={{height:Dimensions.get('window').height}}/>
      <div className = "body-content">
       <img className = "bg" src={bg1} alt="ballr"></img>
        <button className = "login-button"><h1>Login</h1></button>
        <button className = 'signup-button'><h1>Sign up</h1></button>
      </div>
    </div>
  );
}

export default App;
