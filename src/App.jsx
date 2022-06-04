import React, { useEffect, useState } from "react";

let UEcounter = 0;

const App = () => {
    const [userData, setUserData] = useState([]);

    const getData = () => {
        fetch("data.json", {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        }).then((response) => {
            return response.json();
        }). then((myJson) => {
            setUserData(myJson.users);
            console.log(userData);
        })
    }

    useEffect(() => {
        UEcounter++;
        if (UEcounter <= 2) getData();
    })

    return (
        <React.Fragment>
            {
                Object.values(userData).map((user, i) => {
                        
                    return (
                        <ul key = {i} style = {{marginBottom: "50px"}}>
                            <li> {user.username} </li>
                            <li> {user.email} </li>
                            <li> {user.ld_number} </li>
                        </ul>
                    )
                })
            }
        </React.Fragment>
    )
}

export default App;