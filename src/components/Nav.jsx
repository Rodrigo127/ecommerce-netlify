import React from 'react';
import { Link } from 'gatsby';

const navItems = [
    {
        caption: 'Home',
        href: '/'
    },
    {
        caption: 'Products',
        href: '/productos'
    }
]

export default (props) => {
    return(
        <header className="bg-blue-900 text-blue-100 shadow-md">
            <nav className="flex">
                <ul className="flex flex-1">
                    {
                        navItems.map((item, index) => (
                            <li key={index}>
                                <Link className="hover:bg-blue-700 px-6 py-4 inline-block" to={item.href}>{ item.caption }</Link>
                            </li>
                        ))
                    }
                </ul>
                <Link to="/carrito" className="hover:bg-blue-800 bg-blue-500 px-6 py-4 inline-block">
                    {props.shopping_cart.length}
                </Link>
            </nav>
        </header>
    )
}