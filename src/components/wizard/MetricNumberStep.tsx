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

    initialValue?: number;
    initialSystem?: System;
};

export function MetricNumberStep({
    title,
    label,
    metricUnit,
    imperialUnit,
    onSubmit,
    initialValue,
    initialSystem,
}: MetricNumberStepProps){
    const [system, setSystem] = useState<System>(initialSystem ?? 'metric');

    const [value, setValue] = useState(
        initialValue !== undefined ? String(initialValue) : ''
    );

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
        <form
            id={title}
            className="space-y-6 mb-[300px]" 
            onSubmit={handleSubmit}>

            <header className="text-center space-y-5">
                <h1 className="text-[28px] text-[#000000] font-lora">
                    {title}
                </h1>
                <p className="text-[18px] text-foreground font-proxima">
                    This information helps us calculate metabolism 
                    and personalize your plan for optimal weight.
                </p>
            </header>

            {/* toggle metric <-> imperial */}
            <div className="flex rounded-xl p-1.25 bg-under-toggle font-proxima font-semibold space-x-4.5">
                <button
                    type="button"
                    onClick={() => setSystem('metric')}
                    className={`flex-1 rounded-lg px-10.5 py-2 text-[20px]
                        transition-colors duration-200
                        ${system === 'metric'
                            ? 'bg-white text-[#000000]'
                            : 'text-[#3F1E1E80]'
                        }
                    `}
                >
                    Metric
                </button>
                <button
                    type="button"
                    onClick={() => setSystem('imperial')}
                    className={`flex-1 rounded-lg px-10.5 py-2 text-[20px]
                        ${system === 'imperial'
                            ? 'bg-white text-[#000000]'
                            : 'text-foreground-inActive'
                        }
                    `}
                >
                    Imperial
                </button>
            </div>

            {/* form input */}

            <div className="flex items-center rounded-xl border border-[#D3D3D3] bg-white pl-[48px] pr-[27px] py-3 font-proxima h-[75px]">
                <input
                    type="number"
                    inputMode="decimal"
                    placeholder={label}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full bg-transparent text-[22px] placeholder:text-[#A3A3A3]"
                />
                <span className="text-[22px] text-foreground">{unitLabel}</span>
            </div>

            {/* continue button */}
            <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={` font-helvetica
                    mt-[95px] w-full rounded-xl h-13.25 text-sm font-semibold text-white 
                    ${!isValid || isSubmitting
                        ? ` cursor-not-allowed button-inActive`
                        : `button-active`
                    }
                `}
            >
                Continue
            </button>

        </form>
    );
}