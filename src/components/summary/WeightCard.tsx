'use client'

type Props = {
    current: number;
    target: number;
};

type valueWeightBox = {
    label: string;
    value: number;
    borderColor: string;
};

// Helper Function
function WeightBox({
    label,
    value,
    borderColor,
}: valueWeightBox){
    return(
        <div className="space-y-3">
            <p className="text-[22px] font-proxima text-[#3F1E1E] font-bold">
                {label}
            </p>
            <div className={`font-proxima font-bold rounded-lg border solid pb-3 ${borderColor}`}>
                <p className="text-[54px]">{value}</p>
                <p className="text-[24px]">kg</p>
            </div>
        </div>
    );
}

// Component card
export function WeightCard({current, target}: Props){
    return(
        <div className="grid grid-cols-2 gap-4 rounded-xl bg-white p-8 text-center shadow-xl">
            <WeightBox label="Current Weight" value={current} borderColor="border-[#EF3235]"/>
            <WeightBox label="Target Weight" value={target} borderColor="border-[#389A6B]"/>
        </div>
    );
}