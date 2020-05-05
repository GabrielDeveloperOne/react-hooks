import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

const App = () => {

  const userData = [
    {id: 1, name: 'Gabriel', username: 'majorbill'},
    {id: 2, name: 'Maria', username: 'mariagracinha'},
    {id: 3, name: 'Olegario', username: 'olegarizinho'}
  ]

  const [users, setUsers] = useState(userData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
          <div className="flex-large">
            <h2>View user</h2>
            <UserTable users={users}/>
          </div>
        </div>
    </div>
  );
}

export default App;
