'use client';

import type React from "react";
import { useState } from "react";

type System = 'metric' | 'imperial';

type MetricNumberStepProps = {
    title: string;
    label: string;
    metricUnit: string;
    imperialUnit: string;
    onSubmit: (data: {
        system: System;
        value: number;
    }) => Promise<void> | void;
};

export function MetricNumberStep({
    title,
    label,
    metricUnit,
    imperialUnit,
    onSubmit,
}: MetricNumberStepProps){
    const [system, setSystem] = useState<System>('metric');
    const [value, setValue] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const numeric = Number(value.replace(',', '.'));
    const isValid = Number.isFinite(numeric) && numeric > 0;
    const unitLabel = system === 'metric' ? metricUnit : imperialUnit;

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isValid || isSubmitting) return;

        setIsSubmitting(true);
        await onSubmit({ system, value: numeric});
        setIsSubmitting(false);
    };

    return(
        <form onSubmit={handleSubmit}>
            <header>
                <h1>
                    {title}
                </h1>
                <p>
                    This information helps us calculate metabolism 
                    and personalize your plan for optimal weight.
                </p>
            </header>

            {/* toggle metric <-> imperial */}
            <div>
                <button
                    type="button"
                    onClick={() => setSystem('metric')}
                >
                    Metric
                </button>
                <button
                    type="button"
                    onClick={() => setSystem('imperial')}
                >
                    Imperial
                </button>
            </div>

            {/* form input */}

            <div>
                <input
                    type="number"
                    inputMode="decimal"
                    placeholder={label}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <span>{unitLabel}</span>
            </div>

            {/* continue button */}
            <button
                type="submit"
                disabled={!isValid || isSubmitting}
            >
                Continue
            </button>

        </form>
    );
}