import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Hardcoded credentials check
        if (username === "admin123@gmail.com" && password === "admin123") {
            localStorage.setItem("admin", "true");
            navigate("/home");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#212121] p-4">
            <div className="bg-[#2a2a2a] p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Jeeto Punt Admin Login</h2>

                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                        type="text"
                        placeholder="admin123@gmail.com"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 bg-gray-600 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-400 mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 bg-gray-600 text-white rounded border border-gray-600 focus:border-gray-500 focus:outline-none"
                    />
                </div>

                <button
                    onClick={handleLogin}
                    className="w-full bg-gray-500 hover:bg-gray-700 text-white p-3 rounded font-medium transition duration-200"
                >
                    Login
                </button>
            </div>
        </div>
    );
}