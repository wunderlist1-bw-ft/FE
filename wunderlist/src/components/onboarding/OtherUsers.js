import React, { useEffect, useState } from "react";
import axios from "axios";

const OtherUsers = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios
            .get("https://wunderlistdb.herokuapp.com/api/auth/users")
            .then(res => setUserData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="other-users">
            <span>Sign up to join users </span>
            {userData.map((user, index) => {
                let userSpanContent = user.username[0].toUpperCase() + user.username.slice(1);
                if (index < 3) {
                    index === 2 ? userSpanContent += " " : userSpanContent += ", ";
                    return <span key={user.id} className="other-user">{userSpanContent}</span>
                }
                return null;
            })}
            <span> and many more!</span>
        </div>
    )
}

export default OtherUsers;