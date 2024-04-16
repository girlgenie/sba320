import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  // Function to fetch users from the API
  async function getUsers() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
      console.log(users)

      //process and render the data in the console
      users.forEach(users => {
        console.log(`Username: ${users.username}`);
        console.log(`Address: ${users.address}`);
        console.log(`Email: ${users.email}`);
        console.log(`Website: ${users.website}`)
      });

      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <Card user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
