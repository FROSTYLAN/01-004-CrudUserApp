import React from "react";

const UsersList = ({users, selectUser, removeUser, setIsOpen, setDeleteMessage}) => {
    return(
        <div className="UserList">
            {
                users.map(user =>(
                    <div className="user-container" key={user.id}>
                        <h2>{user.first_name} {user.last_name}</h2>
                        <div className="space"></div>
                        <span>EMAIL</span>
                        <p>{user.email}</p>
                        <span>BIRTHDAY</span>
                        <p>{user.birthday}</p>
                        <div>
                            <button className="update-button" onClick={() => {
                                selectUser(user)
                                setIsOpen(true)
                            }
                            }>
                                Update
                            </button>
                            <button className="delete-button" onClick={() => {
                                removeUser(user.id)
                                setDeleteMessage(true)
                            }
                            }>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;