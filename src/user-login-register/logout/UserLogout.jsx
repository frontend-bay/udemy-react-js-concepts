import "./UserLogout.css";
import { Link, useNavigate } from "react-router-dom";

const UserLogout = () => {
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8083/ap/auth/logout", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {

                const data = await res.json();
                alert("Logout Successful! "+data.response);
                localStorage.removeItem("accessToken");
                navigate("/login", { replace: true })

            } else {
                alert("Invalid Credentials");
            }
        } catch (err) {
            console.error("Logout error:", err);
            alert("Something went wrong!");
        }
    };
    return (
        <div className="logout-container">
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default UserLogout;