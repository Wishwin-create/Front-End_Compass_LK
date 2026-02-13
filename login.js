window.addEventListener("DOMContentLoaded", () => {
    const email = localStorage.getItem("signupEmail");
    const password = localStorage.getItem("signupPassword");
    if (email && password) {
        document.getElementById("loginEmail").value = email;
        document.getElementById("loginPassword").value = password;

        //Clear stored data for security
        localStorage.removeItem("signupEmail");
        localStorage.removeItem("signupPassword");  

    }
});

// ================= LOGIN SUBMIT =================
const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop page reload

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message); // "Login successful"

                // Save user info to localStorage
            localStorage.setItem("userName", data.name);   // or data.email if you don't have name
            localStorage.setItem("userId", data.id);       // optional, if your backend sends an id


            // Redirect after login
            window.location.href = "Landing_page.html"; // or dashboard.html
        } else {
            alert(data.message); // invalid email/password
        }

    } catch (error) {
        alert("Server error");
        console.error(error);
    }
});