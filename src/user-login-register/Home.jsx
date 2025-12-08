
import { useEffect, useState } from "react";
import { apiFetch } from "./api";

export default function Home() {
    const [message, setMessage] = useState("Loading...");
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await apiFetch("/ap/auth/home", { method: "GET" });

                if (res.ok) {
                    const data = await res.json();
                    console.log("data "+data)
                    setMessage(data?.data || "Welcome!");
                } else {
                    setError("Failed to load home data");
                }
            } catch (err) {

                console.error("Error fetching home:", err);
                setError("Something went wrong!");
            }
        }

        fetchData();
    }, []);

    if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

    return <h1>{message}</h1>;
}
