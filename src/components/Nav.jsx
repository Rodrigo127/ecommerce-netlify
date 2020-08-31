import React from 'react';
import { Link } from 'gatsby';
import { IoMdCart } from 'react-icons/io';
import { IconContext } from 'react-icons';

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
    const total = props.shopping_cart.reduce(
        (total, product) => 1 + total, 0
    );
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
                    <IconContext.Provider value={{ className:"inline-block mr-2 text-xl" }}>
                        <IoMdCart />
                    </IconContext.Provider>
                    {total}
                </Link>
            </nav>
        </header>
    )
}