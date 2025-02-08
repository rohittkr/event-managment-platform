import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });

            // Store token in local storage
            localStorage.setItem("token", res.data.token);
            alert("✅ Login Successful!");
            navigate("/dashboard"); // Redirect to dashboard
        } catch (error) {
            alert(error.response?.data?.message || "⚠ Login Failed! Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Login to Your Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Email</label>
                        <input 
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-400 transition-all duration-300" 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Password</label>
                        <input 
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-400 transition-all duration-300" 
                            type="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? <a href="/register" className="text-green-500 font-medium hover:underline">Sign up here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
