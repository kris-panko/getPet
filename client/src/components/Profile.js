import React, { useState } from "react";
import UserForm from "./UserForm";
import { useNavigate } from "react-router-dom";

function Profile({ currUser, setCurrentUser, xurl, removeUser }) {
    const [showForm, setShowForm] = useState(false);

    function handleClick() {
        setShowForm((showForm) => !showForm);
    }

    const navigate = useNavigate()

    const handleProf = (updProf) => {
        console.log(updProf)
        console.log(currUser)
        fetch(xurl + "/users/" + currUser.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(updProf)
        })
            .then(r => {
                if (r.ok) {
                    const updatesUseee = {
                        ...updProf, favorites: currUser.favorites, adoptions: currUser.adoptions, id: currUser.id
                    }
                    setCurrentUser(updatesUseee)
                }
            })
    }

    const deleteUsr = () => {
        fetch(xurl + "/users/" + currUser.id, {
            method: "DELETE",

        })
            .then(r => {
                if (r.ok) {
                    removeUser(currUser)
                    setCurrentUser("")
                    navigate("/login")
                }

            })

    }

    function handleSignout(e){
        setCurrentUser("")
        navigate("/login")
    }



    return (
        <>
            {showForm ? <UserForm handleProf={handleProf} currUser={currUser} deleteUsr={deleteUsr} /> : <> </>}
            <div className="buttonContainer">
                <button onClick={handleClick} className="user-form-submit">User Settings</button>
            </div>
            <div className="buttonContainer">
                <button onClick={handleSignout} className="user-form-submit">Sign out</button>
            </div>

        </>

    )
}

export default Profile;