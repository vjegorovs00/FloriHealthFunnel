type ProgressBarProps = {
    value: number;
};

export default function ProgressBar({value}: ProgressBarProps) {
    
    const clamped = Math.min(100, Math.max(0, value));

    return (
        <div className="h-1 w-full">
            <div
                className="h-full bg-progress-bar transition-[width] duration-300 ease-out"
                style={{width: `${clamped}%`}}
            />
        </div>
    );
}