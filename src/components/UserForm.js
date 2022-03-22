import axios from "axios";
import React, { useEffect, useState } from "react";

 const UserForm = ({getUsers, userSelected, selectUser}) => {

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword] = useState("");
    const [ birthday, setBirthday ] = useState("");

    useEffect(() => {
        if (userSelected) {
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        } else {
            reset();
        }
    }, [userSelected])

    const reset = () => {
        setLastName("");
        setFirstName("");
        setEmail("");
        setPassword("");
        setBirthday("");
    }

    const submit = e => {
        e.preventDefault();
        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday  
        }
        if (userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers();
                    selectUser(null);
                });
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', user)
                .then(() => {
                    getUsers();
                    reset()
                });
        }
        
    };

    return(
        <form className="form-container" onSubmit={submit}>
            <div className="input-container">
                <label htmlFor="firstName">Fisrt Name</label>
                <input 
                    type="text"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
            </div>

            <div className="input-container">
                <label htmlFor="LastName">Last Name</label>
                <input
                    type="text"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
            </div>

            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </div>

            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <div className="input-container">
                <label htmlFor="birthday">birthday</label>
                <input
                    type="date"
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                />
            </div>
            <button>Submit</button>
            {userSelected &&
                <button onClick={() => selectUser(null)}>Cancel</button>
            }
        </form>
    );
 };

 export default UserForm;