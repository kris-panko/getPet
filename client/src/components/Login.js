import React, { useEffect, useState } from "react";

function Login({ users, currUser, loggedIn, setLogIn, setCurrentUser, xurl, addUser }) {
    const initValue = {
        name: "",
        username: "",
        password: "",
    };

    const [searchUserHold, setSearchUserHold] = useState(initValue);
    const [loginMode, setLoginMode] = useState(true);

    useEffect(() => {
        if (users.find((user) => user === currUser)) {
            setLogIn(true);
        } else {
            setLogIn(false);
        }
    }, []);

    function handleClick(e) {
        console.log(users);
        setLoginMode(!loginMode);
    }

    function handleLoginChange(e) {
        const { name, value } = e.target;
        setSearchUserHold({
            ...searchUserHold,
            [name]: value,
        });
    }

    function handleLoginSubmit(e) {
        e.preventDefault();
        const usernameCheck = users.find((user) => user.username === searchUserHold.username);
        const passwordCheck = users.find((user) => user.password === searchUserHold.password);
        if (usernameCheck !== undefined && passwordCheck !== undefined) {
            setLogIn(true);
            setCurrentUser(users.find((user) => user.username === searchUserHold.username));
        }
    }

    function handleSignupChange(e) {
        const { name, value } = e.target;
        setSearchUserHold({
            ...searchUserHold,
            [name]: value,
        });
    }

    function handleSignupSubmit(e) {
        e.preventDefault();
        fetch(`${xurl}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(searchUserHold),
        }).then((r) => {
            if (r.ok) {
                const data = {
                    ...searchUserHold,
                    favorites: [],
                    adoptions: [],
                };
                addUser(data);
            }
        });
    }

    return (
        <div className="login-form">
            {loginMode ? (
                <div>
                    <button onClick={handleClick} className="signup-toggle">
                        Don't have an account? Signup!
                    </button>
                    <form className="login-form" onSubmit={handleLoginSubmit}>
                        <div>
                            <label className="login-label">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="login-input"
                                onChange={handleLoginChange}
                            />
                            <br></br>
                            <label className="login-label">Password:</label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                className="login-input"
                                onChange={handleLoginChange}
                            />
                        </div>
                        <div>
                            <input type="submit" className="login-submit" />
                        </div>
                    </form>
                </div>
            ) : (
                <form className="signup-form" onSubmit={handleSignupSubmit}>
                    <div>
                        <label className="signup-label">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="signup-input"
                            onChange={handleSignupChange}
                        />
                        <br></br>
                        <label className="signup-label">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="signup-input"
                            onChange={handleSignupChange}
                        />
                        <br></br>
                        <label className="signup-label">Password:</label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            className="signup-input"
                            onChange={handleSignupChange}
                        />
                    </div>
                    <div>
                        <input type="submit" className="signup-submit" />
                    </div>
                    <button onClick={handleClick} className="signup-toggle">
                        Already have an account? Signin!
                    </button>
                </form>
            )}
        </div>
    );
}

export default Login;
