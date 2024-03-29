import React from "react";
import Header from "./Header";

const Main = ({children}) => {
    return(
        <React.Fragment>
            <Header />
            <div id="page-transitions">
                {children}
            </div>
        </React.Fragment>
    )
}

export default Main;