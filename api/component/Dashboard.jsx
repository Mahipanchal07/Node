import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        axios.get("http://localhost:5000/auth/verify", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => setUser(res.data.user))
            .catch(() => {
                localStorage.removeItem("token");
                navigate("/login");
            });
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome, {user?.username}!</h2>
                <p className="mb-4">You are successfully logged in.</p>
                <button className="bg-red-500 text-white p-2 rounded w-full" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
