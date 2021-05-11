import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                <Link href='/'>PROFILE</Link>
                </li>
                <li>
                <Link href='/portfolios'>PORTFOLIOS</Link>
                </li>
                <li>
                <Link href='/inspiration'>INSPIRATION</Link>
                </li>
            </ul>    
        </nav>
    )
}

export default Nav
