import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserLogin.css";
import { apiFetch } from "../api";



const UserLogin = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8083/ap/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (res.ok) {

                const data = await res.json();
                localStorage.setItem("accessToken", data.accessToken);
                alert("Login Successful! "+data.accessToken);
                navigate("/home")
            } else {
                alert("Invalid Credentials");
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Something went wrong!");
        }
    };


    async function getHomeData() {
        const res = await apiFetch("/ap/auth/home", {
            method: "GET",
        });

        if (res.ok) {
            const data = await res.json();
            console.log("Home data:", data);
        }
    }

    return (
        <div className="login-container">

            {/* Top-Right Register Link */}
            <div className="top-right-link">
                <Link to="/register">Register</Link>
            </div>

            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>
            </form>

        </div>
    );
};

export default UserLogin;
