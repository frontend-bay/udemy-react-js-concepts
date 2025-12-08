const BASE_URL = "http://localhost:8083";

async function refreshAccessToken() {
    const res = await fetch(`${BASE_URL}/ap/auth/refresh`, {
        method: "POST",
        credentials: "include", // MUST send cookie
        headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
        const data = await res.json();
        localStorage.setItem("accessToken", data.accessToken);
        return data.accessToken;
    } else {
        throw new Error("Refresh token expired. Please login again.");
    }
}

export async function apiFetch(url, options = {}) {
    let token = localStorage.getItem("accessToken");

    console.log("token with url ", url, token);
    options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    };
    options.credentials = "include";

    let response = await fetch(BASE_URL + url, options);

    console.log("response with url ",url,  response);
    // 🔄 If token expired → Refresh it →
    if (response.status === 401) {
        try {
            console.log("getting new token using refresh token");
            token = await refreshAccessToken(); // get new token
            options.headers.Authorization = `Bearer ${token}`;
            response = await fetch(BASE_URL + url, options); // retry request
        } catch (err) {
            localStorage.removeItem("accessToken");
            window.location.href = "/login";
            return;
        }
    }

    return response;
}
