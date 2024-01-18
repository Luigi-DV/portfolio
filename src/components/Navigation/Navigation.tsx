"use client";

import React from "react";

// Next Modules
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE} from "@/constants/routes";

/**
 * Navigation Component
 */
export const Navigation = () => {
    const path = usePathname();

    return(
        <nav className="absolute top-0 right-0 m-8">
            <ul className="flex space-x-6">
                <li>
                    <Link className={path == HOME_ROUTE.link ? "font-black hover:text-gray-300" : "hover:text-gray-300"}
                          href={HOME_ROUTE.link}>
                        {HOME_ROUTE.name}
                    </Link>
                </li>
                <li>
                    <Link className={path == PROJECTS_ROUTE.link ? "font-black hover:text-gray-300" : "hover:text-gray-300"}
                          href={PROJECTS_ROUTE.link}>
                        {PROJECTS_ROUTE.name}
                    </Link>
                </li>
                <li>
                    <Link className={path == CONTACT_ROUTE.link ? "font-black hover:text-gray-300" : "hover:text-gray-300"}
                          href={CONTACT_ROUTE.link}>
                        {CONTACT_ROUTE.name}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}