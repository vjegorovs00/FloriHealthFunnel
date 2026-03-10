'use client';

export type PlanId = '1m' | '6m' | '3m';

type PlanListProps = {
    selected: PlanId;
    onChange: (id: PlanId) => void;
};

// Helper function
type PlanRowProps = {
  id: PlanId;
  title: string;
  price: string;
  oldPrice: string;
  period: string;
  selected: boolean;
  highlight?: boolean;
  onSelect: () => void;
};
function PlanRow({
  title,
  price,
  oldPrice,
  period,
  selected,
  highlight,
  onSelect,
}: PlanRowProps){
    return(
        <button
            type="button"
            onClick={onSelect}
            className={`flex w-full items-center justify-between border-2 rounded-xl px-4 py-3 
                text-left transition-color duration-200
                ${selected
                    ? 'border-[#3F1E1E] bg-[#F8F4F2]'
                    : 'border-[#E3DFDC] bg-white hover:bg-[#F8F4F2]'
                }
                ${highlight
                    ? 'shadow-[0_0_0_1px_rgba(63,30,30,0.05)]'
                    : ''
                }
            `}
        >
            <div className="flex items-center gap-3">
                <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border 
                    ${selected ? 'border-[#3F1E1E] bg-[#3F1E1E]' : 'border-[#C8C2BD] bg-white'}    
                    `}
                >
                    {selected && <span className="text-white text-[15px] font-bold">✓</span>}
                </span>

                <div>
                    <p className="text-[19px] font-semibold text-[#3F1E1E]">{title}</p>
                    <p className="text-[11px] font-semibold text-[#AEAEAE]">Billed {period}</p>
                </div>
            </div>

            <div className="text-right">
                <p className="text-[16px] text-[#AEAEAE] line-through decoration-[#EF3235]">{oldPrice}</p>
                <p className="text-[#3F1E1E] text-[26px] font-black">{price}</p>
                <p className="text-[11px] text-[#AEAEAE]">per month</p>
            </div>
        </button>
    );
}


// Component card
export function PlanList({selected, onChange}: PlanListProps){

    return(
        <div className="relative overflow-hidden rounded-xl bg-white shadow-xl font-proxima">
            {/* upper label */}
            <div className="bg-[#3F1E1E] text-center text-[18px] font-medium text-white py-4 ">
                Limited Time Offer - Expires in: 14:24
            </div>

            <div className="space-y-4 px-6 pt-5 pb-8  flex flex-col">
                <p className="mb-3 text-[16px] text-[#A4A4A4] text-center">Select your plan</p>
                <PlanRow
                    id="1m"
                    title="1 Month Plan"
                    price="$35.00"
                    oldPrice="$39.00"
                    period="per month"
                    selected={selected === '1m'}
                    onSelect={() => onChange('1m')}
                />
            <div className="absolute top-1/2 -translate-y-5.5 left-1/8 
            rounded-[20px] bg-[#38BB63] px-3 py-1.5 text-center text-[11px] text-white">
            Limited Offer - Save 75%
            </div>

                <PlanRow
                    id="6m"
                    title="6 Month Plan"
                    price="$11.00"
                    oldPrice="$39.00"
                    period="per month"
                    selected={selected === '6m'}
                    onSelect={() => onChange('6m')}
                    highlight
                />

                <PlanRow
                    id="3m"
                    title="3 Month Plan"
                    price="$16.00"
                    oldPrice="$39.00"
                    period="per month"
                    selected={selected === '3m'}
                    onSelect={() => onChange('3m')}
                />
            </div>
        </div>
    );
}