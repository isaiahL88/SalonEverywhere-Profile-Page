import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                <Link>PROFILE</Link>
                </li>
                <li>
                <Link>PORTFOLIOS</Link>
                </li>
                <li>
                <Link>INSPIRATION</Link>
                </li>
            </ul>    
        </nav>
    )
}

export default Nav
