import React from "react";

const UsersList = ({users, selectUser, removeUser}) => {
    return(
        <div>
            {
                users.map(user =>(
                    <div className="user-container" key={user.id}>
                        <h2>{user.first_name} {user.last_name}</h2>
                        <span>EMAIL</span>
                        <p>{user.email}</p>
                        <span>BIRTHDAY</span>
                        <p>{user.birthday}</p>
                        <button onClick={() => selectUser(user)}>Update</button>
                        <button onClick={() => removeUser(user.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;