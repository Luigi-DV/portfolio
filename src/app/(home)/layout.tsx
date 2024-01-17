import React from "react";

// Next Modules
import Link from "next/link";

// Components
import {ThemeToggle} from "@/components/ThemeToggle";
import {Navigation} from "@/components/Navigation";
import {Footer} from "@/components/Footer";

/**
 * Home Layout
 * @param children
 * @constructor
 */
export default function HomeLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return(
        <div>
            <Navigation />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
            <Footer />
        </div>
    )
}