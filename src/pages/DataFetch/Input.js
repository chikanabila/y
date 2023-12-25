import React, { useState, useEffect} from "react";
import './tabelStyle.css';

const Input = () => {
    const [data, setData] = useState([]);
    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch ("https://jsonlaceholder.typicode.com/posts");
                const results = await response.json();
                setData(results);
            } catch (error) {
                console.error("Error Menampilkan data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Ini adalah Halaman Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.name}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Input;
