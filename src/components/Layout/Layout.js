import React from "react";

import Aux from "../../hoc/Aux";

import cssClasses from "./Layout.module.css"

const layout = props =>(
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={cssClasses.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;