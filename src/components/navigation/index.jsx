import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ page, children }) => {
    return (
        <div className="min-h-screen mt-16 px-4 md:px-14">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link to={"/"}>Beranda</Link>
                    </li>
                    <li>{page}</li>
                </ul>
            </div>
            {children}
        </div>
    );
};

export default Navigation;
