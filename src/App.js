import './App.css';
import axios from 'axios';
import  {useEffect, useState} from 'react';
import UsersList from './components/UsersList';
import UserForm from './components/UserForm';

function App() {

  const [users, setUsers] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
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

  return (
    <div className="App">
      <div className='header'>
        <h1>Users</h1>
        <button onClick={() => setIsOpen(true)}> + Add users</button>
      </div>
      <article className={`modal ${isOpen && "is-open"}`}>
        <UserForm
          getUsers={getUsers}
          userSelected={userSelected}
          selectUser={selectUser}
          setIsOpen={setIsOpen}
        />
      </article>

      <article className={`modal ${deleteMessage && "is-open"}`}>
        <div className='delete-container'>
          <h1>Delete users</h1>
          <p>the user has been deleted</p>
          <button onClick={() => setDeleteMessage(false)}>OK</button>
        </div>
      </article>

      <UsersList 
        users={users} 
        selectUser={selectUser} 
        removeUser={removeUser}
        setIsOpen={setIsOpen}
        setDeleteMessage={setDeleteMessage}
      />
    </div>
  );
}

export default App;
