import React, { Fragment } from "react";
import Nav from "./Nav";

export default (props) => {
    return(
        <Fragment>
            <Nav />
            <main className="max-w-4xl mx-auto">{ props.children }</main>
        </Fragment>
    )
}