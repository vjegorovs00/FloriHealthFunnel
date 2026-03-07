'use client';
// Navbar for step-1

import BaseNavbar from "./BaseNavbar";

import logoNavbar from "@/assets/logo/logoNavbar.svg"
import menu from "@/assets/layout/menu.svg"

import Image from "next/image";
import Link from "next/link";
// pl-[248px] pr-[256px]

export default function StepOneNavbar() {
    return (
        <header className="py-5.5 px-4
        md:pl-[248px] md:pr-[256px]">
            <BaseNavbar
            left={
                <Link
                    href="/"
                    className="inline-flex items-center justify-left"
                    aria-label="Go to homepage"
                >
                    <Image src={logoNavbar} alt="Flori logo"/>

                </Link>  
            }
            center={null}
            right={
                <div className="flex items-center justify-right gap-6 font-bold font-helvetica">
                    <Link
                        href="/FAQ"
                        aria-label="Go to FAQ"
                    >
                        <span className="underline">Help?</span>
                    </Link>
                    <Link
                        href="/login"
                        aria-label="Go to Log in page"
                    >
                        Log in
                    </Link>
                    <Link
                        href="/MENUmodule"
                        aria-label="Open menu module"
                    >
                        <Image src={menu} alt="Open menu"/>
                    </Link>
                </div>
            }
            />
        </header>
    );
}