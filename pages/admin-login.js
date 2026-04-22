import { useState } from "react";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin");
    } else {
      alert("Wrong password ❌");
    }
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Admin Login 🔐</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={{ padding: 10, marginTop: 10 }}
      />

      <br />

      <button
        onClick={handleLogin}
        style={{
          marginTop: 10,
          padding: 10,
          background: "#0070f3",
          color: "white",
          border: "none",
        }}
      >
        Login
      </button>
    </div>
  );
}