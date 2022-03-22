import './App.css';
import axios from 'axios';
import  {useEffect, useState} from 'react';
import UsersList from './components/UsersList';
import UserForm from './components/UserForm';

function App() {

  const [users, setUsers] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);

  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  const selectUser = user => setUserSelected(user);

  const removeUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  }

  console.log(users);

  return (
    <div className="App">
      <h1>Users</h1>
      <UserForm getUsers={getUsers} userSelected={userSelected} selectUser={selectUser}/>
      <UsersList users={users} selectUser={selectUser} removeUser={removeUser}/>
    </div>
  );
}

export default App;
