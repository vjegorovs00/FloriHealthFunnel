'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";

import chevronLeft from "@/assets/layout/chevronLeft.png"
import logoNavbar from "@/assets/logo/logoNavbar.svg"

export default function Navbar(){
    const router = useRouter();

    return(
        <header className="px-8 pt-4 pb-3 border-b">
            <div className="relative flex items-center justify-center">
                <button
                    type="button"
                    onClick={() => router.back()}
                    aria-label="Go back"
                    className="absolute left-0 flex h-8 w-8 items-center justify center rounded-full" 
                >
                    <Image src={chevronLeft} alt="Left arrow - back button"/>
                </button>
                <Image src={logoNavbar} alt="Flori logo"/>
            </div>
        </header>
    );
}