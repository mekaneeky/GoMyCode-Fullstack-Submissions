import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto path_to_pic={"./schmidhuber.jpg"}/>
        <FullName first_name={"Ali..."} last_name={" Hussein"} />
        <Address unit_number={"23"} street={"123 St"} city="Vancouver" country="Canada" />
      </header>
    </div>
  );
}

export default App;
