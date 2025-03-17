import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/auth/signup", { username, password });
            alert("Signup successful! You can now login.");
            navigate("/login");
        } catch (error) {
            alert(error.response?.data || "Signup failed!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                <h2 className="text-2xl font-bold mb-4">Signup</h2>
                <form onSubmit={handleSignup}>
                    <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className="w-full bg-blue-500 text-white p-2 rounded mb-4" type="submit">Signup</button>
                </form>
                <p>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
            </div>
        </div>
    );
}
