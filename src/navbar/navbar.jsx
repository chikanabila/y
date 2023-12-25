import React from "react"
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="topnav">
        {/* <h1>Ini adalah Navbar</h1> */}
        <Link to ="/" className="App-link"><h3>Home</h3></Link>
        <Link to ="Login" className="App-link"><h3>Login</h3></Link>
        <Link to ="About" className="App-link"><h3>Contact</h3></Link>
        

    </div>
  )
}