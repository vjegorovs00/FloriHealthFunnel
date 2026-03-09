'use client';

import { ReactNode } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Navbar from '@/components/layout/Navbar';
import SpecialNavbar from '@/components/layout/SpecialNavbar';
import ProgressBar from '@/components/layout/ProgressBar';
import StepOneNavbar from '@/components/layout/StepOneNavbar';

const progressSteps = [
    'step-2',
    'step-3',
    'step-4',
    'step-5'
];

export default function WizardLayout( {children}: {children: ReactNode }) {
    const segment = useSelectedLayoutSegment();
    
    const progressIndex = progressSteps.indexOf(segment ?? '');

    const progress = progressIndex === -1 ? 0 : 50 + progressIndex * 10;

    const isStepOne = segment === 'step-1';
    const isSpecial = segment === 'step-special';
    const isLast = segment === 'step-6';

    let navbar = <Navbar/>;
    if (isStepOne) navbar = <StepOneNavbar />;
    if (isSpecial) navbar = <SpecialNavbar />;

    const bgClass = isSpecial ? 'bg-canvas-warm' : (isStepOne ? 'bg-canvas-default' : 'bg-page');

    return (
        <div className={`min-h-screen ${bgClass}`}>
            <div className="border-b">
                {navbar}
            </div>

            {(!isSpecial && !isStepOne && !isLast) && <ProgressBar value={progress}/>}

            <main className={`${!isStepOne && !isLast ? 'wizard-shell' : 'first-last-shell'}`}>
                {children}
            </main>
        </div>
    );
}