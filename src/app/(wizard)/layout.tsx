'use client';

import { ReactNode } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Navbar from '@/components/layout/Navbar';
import SpecialNavbar from '@/components/layout/SpecialNavbar';
import ProgressBar from '@/components/layout/ProgressBar';
import StepOneNavbar from '@/components/layout/StepOneNavbar';

const steps = [
    'step-1',
    'step-2',
    'step-3',
    'step-4',
    'step-special',
    'step-5',
    'step-6',
]

export default function WizardLayout( {children}: {children: ReactNode }) {
    const segment = useSelectedLayoutSegment();
    
    const currentIndex = steps.findIndex((s) => s === segment);
    const progress: number = (currentIndex === -1) ? 0 : (currentIndex / (steps.length - 1)) * 100;

    const isStepOne = segment === 'step-1';
    const isSpecial = segment === 'step-special';

    let navbar = <Navbar/>;
    if (isStepOne) navbar = <StepOneNavbar />;
    if (isSpecial) navbar = <SpecialNavbar />

    return (
        <div className="min-h-screen">
            {navbar}

            {!isSpecial && <ProgressBar value={progress}/>}

            <main className="wizard-shell">{children}</main>
        </div>
    );
}