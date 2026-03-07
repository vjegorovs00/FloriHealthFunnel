'use client';
// Navbar for Special/confirming step

import Link from "next/link";
import Image from "next/image";

import logoNavbar from "@/assets/logo/logoNavbar.svg"

import BaseNavbar from "./BaseNavbar";

export default function SpecialNavbar() {
    return (
        <header className="py-3.5">
            <BaseNavbar
                left={null}
                center={
                    <Link
                        href="/"
                        className="inline-flex items-center justify-left"
                        aria-label="Go to homepage"
                    >
                        <Image src={logoNavbar} alt="Flori logo"/>

                    </Link>  
                }
                right={null}
            />
        </header>
    );
}