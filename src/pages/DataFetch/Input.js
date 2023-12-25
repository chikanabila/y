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
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.name}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Input;