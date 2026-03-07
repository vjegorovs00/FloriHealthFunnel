'use client';

// Navbar for form entry step-2 -> step-6

import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";

import { useSelectedLayoutSegment } from "next/navigation";

import chevronLeft from "@/assets/layout/chevronLeft.png"
import logoNavbar from "@/assets/logo/logoNavbar.svg"
import BaseNavbar from "./BaseNavbar";

export default function Navbar(){
    const router = useRouter();
    const segment = useSelectedLayoutSegment();

    return(
        <header className="bg-page py-5.5">
            <BaseNavbar 
                left={ segment === 'step-6' ? 
                    <div className="h-12 w-12"/> 
                    :
                    <div className="flex w-full justify-end">
                        <button
                                type="button"
                                onClick={() => router.back()}
                                aria-label="Go back"
                                className="
                                    bg-white relative left-0 flex h-12 w-12
                                    items-center justify-center rounded-full cursor-pointer
                                "
                            >
                                <Image src={chevronLeft} alt="Left arrow - back button"/>
                        </button>
                    </div>
                }
                center={
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center"
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