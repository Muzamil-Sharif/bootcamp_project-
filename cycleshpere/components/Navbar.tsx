import { createClient } from "@/prismicio";
import NavbarClient from "./NavbarClient";
import React from "react";

export default async function Navbar() {
    const client = createClient();
    const navbar = await client.getSingle("navbar").catch(() => null);
    if (!navbar) return null;

    return <NavbarClient data={navbar.data} />;
}
