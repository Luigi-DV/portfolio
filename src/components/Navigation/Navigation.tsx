import React from "react";

// Next Modules
import Link from "next/link";

/**
 * Navigation Component
 */
export const Navigation = () => {
    return(
        <nav className="absolute top-0 right-0 m-8">
            <ul className="flex space-x-6">
                <li>
                    <Link className="hover:text-gray-300" href="#">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className="hover:text-gray-300" href="#">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}