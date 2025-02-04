import React from "react";

// Components
import {NavigationBar} from "@/components/NavigationBar";
// Services
import {getNavigationData} from "@/services/navigationService";
import {getContactData} from "@/services/contactService";


/**
 * Home Layout
 * @param children
 * @constructor
 */
export default async function HomeLayout({
   children,
}: {
    children: React.ReactNode
}) {

    const navigationData = await getNavigationData();
    const contactData = await getContactData();

    return(
        <>
                {children}
            {
                navigationData && contactData &&
                <NavigationBar navigation={navigationData.navbar} contact={contactData.contact}/>
            }
        </>
)
}