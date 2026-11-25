import React from 'react'
import { NavLink } from 'react-router'

const about = () => {
  return (
    <div>
        <h1>ABOUT PAGE</h1>
        <NavLink to='/' className='btn btn-primary'>GO TO HOME PAGE</NavLink>
    </div>
  )
}

export default about