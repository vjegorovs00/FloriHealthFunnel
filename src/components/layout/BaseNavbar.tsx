'use client'

import { ReactNode } from "react";
import clsx from 'clsx';

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
        <header className={clsx('bg-shell-paper px-8 py-3', className)}>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center justify-start">{left}</div>
                <div className="flex items-center justify-center">{center}</div>
                <div className="flex items-center justify-end">{right}</div>
            </div>
        </header>
    );
}