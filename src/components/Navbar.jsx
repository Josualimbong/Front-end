import React from 'react'
import '../App'
import { Link } from 'react-router-dom'
import { BsFillCartCheckFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>List Books</h1>
      </div>
      <div>
        <Link to="/favorites">
          <a href="">
            {' '}
            <BsFillCartCheckFill />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
