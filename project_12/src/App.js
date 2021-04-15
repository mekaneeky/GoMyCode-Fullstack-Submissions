import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile> <img style={{height:"30%", width:"30%"}} src={"./schmidhuber.jpg"}/> </Profile>
      </header>
    </div>
  );
}

export default App;
