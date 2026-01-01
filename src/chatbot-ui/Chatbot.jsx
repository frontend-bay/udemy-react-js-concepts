import { useState } from "react";

function App() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false); // 👈 NEW
    const threadId = "3";

    const sendMessage = async () => {
        if (!message || loading) return;

        setLoading(true); // 👈 start spinner

        // show user message immediately
        setChat((prev) => [...prev, { role: "user", text: message }]);

        try {
            const res = await fetch("http://localhost:8000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: message,
                    thread_id: threadId,
                }),
            });

            const data = await res.json();

            setChat((prev) => [
                ...prev,
                { role: "bot", text: data.response },
            ]);
        } catch (err) {
            setChat((prev) => [
                ...prev,
                { role: "bot", text: "❌ Error contacting server" },
            ]);
        } finally {
            setLoading(false); // 👈 stop spinner
            setMessage("");
        }
    };

    // Send on Enter key
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>LangGraph Chat</h2>

            <div
                style={{
                    border: "1px solid #ccc",
                    padding: 10,
                    height: 300,
                    overflowY: "auto",
                    marginBottom: 10,
                }}
            >
                {chat.map((c, i) => (
                    <p key={i}>
                        <b>{c.role}:</b> {c.text}
                    </p>
                ))}

                {/* 👇 Spinner */}
                {loading && <p><i>🤖 Thinking...</i></p>}
            </div>

            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask something..."
                disabled={loading}
                style={{ width: "70%", marginRight: 10 }}
            />

            <button onClick={sendMessage} disabled={loading}>
                {loading ? "Sending..." : "Send"}
            </button>
        </div>
    );
}

export default App;
