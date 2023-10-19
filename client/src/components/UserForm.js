// UserForm component
import React, { useState } from "react";

function UserForm({ handleProf, currUser, deleteUsr }) {
const initialVal = {
    name: currUser.name,
    username: currUser.username,
    password: currUser.password,
};
const [uForm, setUform] = useState(initialVal);

const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUform({ ...uForm, [name]: value });
};

const handleSubmit = (event) => {
    event.preventDefault();
    handleProf(uForm);
};

return (
    <div className="user-form">
    <form onSubmit={handleSubmit} className="update-user-form">
        <h3>Update Profile</h3>
        <label className="signup-label">Name:</label>
        <input
        type="text"
        name="name"
        onChange={handleOnChange}
        value={uForm.name}
        className="user-form-input"
        />
        <br />
        <label className="signup-label">Username:</label>
        <input
        type="text"
        name="username"
        onChange={handleOnChange}
        value={uForm.username}
        className="user-form-input"
        />
        <br />
        <label className="signup-label">Password:</label>
        <input
        type="text"
        name="password"
        onChange={handleOnChange}
        value={uForm.password}
        className="user-form-input"
        />
        <br />
        <button type="submit" className="user-form-submit">
        Submit
        </button>
    </form>

    <button onClick={deleteUsr} className="user-form-delete">
        Delete Account
    </button>
    </div>
);
}

export default UserForm;
