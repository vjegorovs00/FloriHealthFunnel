'use client'

// Basic template of each navbar

import { ReactNode } from "react";
import clsx from 'clsx';

// clsx in case of better refactoring

type BaseNavbarProps = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
    className?: string;
}

export default function BaseNavbar({
    left,
    center,
    right,
    className,
}: BaseNavbarProps) {
    return(
        <header className={clsx('', className)}>
            <div className="grid grid-cols-3 items-center max-w-6xl justify-center mx-auto">
                <div className="flex items-center justify-start">{left}</div>
                <div className="flex items-center justify-center">{center}</div>
                <div className="flex items-center justify-end">{right}</div>
            </div>
        </header>
    );
}