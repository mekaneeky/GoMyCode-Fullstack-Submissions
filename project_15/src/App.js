import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import UserList from './Users/UserList';

function App() {
    const [listOfUsers, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response) => {
                setUsers(response.data)
            }
        )
    });

  return (
      <UserList listOfUsers={listOfUsers} />
    
  );
}

export default App;
