import React, { createContext, useState } from "react";

// 1️⃣ Create a Context
const UserContext = createContext();

// 2️⃣ Create a Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Shivam");

    const updateUser = () => {
        setUser(prev => (prev === "Shivam" ? "Amit" : "Shivam"));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;