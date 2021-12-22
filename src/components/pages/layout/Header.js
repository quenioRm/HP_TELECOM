import React from "react";

const Header = () => {
    return(
        <div>
            <div className="header header-transparent">
            <a href="#" className="header-logo scale-hover"><i className="fa fa-home"></i></a>
                <a href="#" className="header-icon_2 header-icon-1 open-left-sidebar"></a>
                <a href="#" className="header-logo scale-hover"><i className="fa fa-home"></i></a>
                <a href="#" className="header-icon header-icon-4 open-right-sidebar"><i className="fa fa-envelope-o"></i></a>
            </div>
            <div className="bg bg-full bg-cover"></div>
        </div>
    )
}

export default Header;