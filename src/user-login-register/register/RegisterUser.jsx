import React, { useState } from "react";
import "./RegisterUser.css";

const RegisterUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("http://localhost:8083/ap/auth/register", {
                method: "POST",
                credentials: "include", // important to send cookies like refreshToken
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setMessage("User registered successfully!");
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || "Registration failed");
            }
        } catch (error) {
            console.log(error);
            setMessage("Something went wrong!");
        }
    };

    return (
        <div className="register-container">
            <h2>Register User</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Register</button>
            </form>

            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default RegisterUser;
