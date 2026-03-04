'use client';

type ProgressBarProps = {
    value: number;
};

export default function ProgressBar({value}: ProgressBarProps) {
    return (
        <header>
            {value}
        </header>
    );
}