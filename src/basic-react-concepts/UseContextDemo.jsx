import React, { useContext } from "react";
import UserContext from "../context/UserContext.jsx";


// 3️⃣ Component that consumes the context
export const UpdateContextDemo = () => {
    const { user,  updateUser } = useContext(UserContext);
    return (
        <>
        <h2>👤 Current User: {user}</h2>
        <button
            onClick={updateUser}
            style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer"
            }}
        >
            Change User
        </button>
        </>
    );
};

