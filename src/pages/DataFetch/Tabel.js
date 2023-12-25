import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./tabelStyle.css";

const Tabel = () => {
    const [data, setdata] = useState([]);
    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch ("https://jsonlaceholder.typicode.com/posts")
                const results = await response.json();
                setdata(results)
            } catch (error) {
                console.error("Error Menampilkan Data", error)
            }
        }
        fetchData()
},[])

return (
    <div>
    {/* <Link to={"login/dashboard"} className="tabledata"><h4>Tambah Data</h4></Link> */}
    <Link to={"login/dashboard"} className="tabledata"><h4>Tambah Data</h4></Link>

    <div className="table-container">
        <div className="table-card">
            <table className="custom-table">
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
                    {data.map ((user) =>(
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
    </div>
    </div>
    );
};

export default Tabel;
