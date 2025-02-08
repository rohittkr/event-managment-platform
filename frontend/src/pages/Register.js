import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                username, email, password
            });

            alert("✅ Registration Successful! You can now login.");
            navigate("/login"); // Redirect to login page
        } catch (error) {
            console.error("❌ Registration Error:", error.response?.data);
            alert(error.response?.data?.message || "⚠ Registration Failed! Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Username</label>
                        <input 
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
                            type="text" 
                            placeholder="Enter your username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Email</label>
                        <input 
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
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
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
                            type="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <a href="/login" className="text-blue-500 font-medium hover:underline">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
