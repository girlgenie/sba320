import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";
import axios from "axios";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [users, setUsers] = useState([]);

  

  // Function for API call

  async function getUsers() {
    try {
      const response = await axios.get("https://jsonplaceholder.org/users");
      console.log(response.data)
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  
  const handleSelectItem = (item) => {
    console.log(item);
  };

  return (
    <>
      {users.map((user) => <li>{user.firstname} {user.lastname}</li>)}
    </>
  );
}

export default App;
