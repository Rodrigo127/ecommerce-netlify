import React from 'react';
import { Link } from 'gatsby';

export default ( { product } ) => {
    return(
        <article className="card p-4">
            <header>
                <h2 className="font-bold uppercase text-2xl">
                    <Link to={`/productos/${product.name}`}>{ product.name }</Link>
                </h2>
            </header>
        </article>
    )
}