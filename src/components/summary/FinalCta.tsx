'use client';

import type { PlanId } from './PlanList';

type Props ={
  selectedPlan: PlanId;
  onClick: () => void;
};

const PLAN_LABEL: Record<PlanId, string> = {
  '1m': '1-MONTH PLAN',
  '3m': '3-MONTH PLAN',
  '6m': '6-MONTH PLAN',
};

export function FinalCta({selectedPlan, onClick}: Props){
    
    const label = PLAN_LABEL[selectedPlan];
    
    return(
        <div className='w-full justify-center items-center mt-4 flex flex-col gap-3'>
            <p className='text-[#3F1E1E] font-semibold font-proxima underline'>30 Day Money Back Guarantee</p>
            <button
                type='button'
                onClick={onClick}
                className="relative w-full rounded-xl py-3 text-[14px] font-semibold text-white 
                button-active transition-colors duration-200 hover:opacity-90 h-[53px] mb-4"
            >
                <span className='uppercase block text-center'>GET MY {label}</span>
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-base">&gt;</span>
            </button>
            <p className="font-proxima text-[11px] font-medium text-[#AEAEAE]">
                By purchasing this, I agree to Terms of Services and Privacy Policy and to pay $66 for <br/>
                6-months membership introductory offer and if I don’t cancel before the end of  6-<br/>
                months period, it will convert to regular membership with price $149 every 6 months<br/>
                and Flori Health will charge my payment method automatically until I cancel my<br/>
                membership. I can manage my membership by visiting my account under section <br/>
                “Manage your subscription”.                
            </p>
        </div>
    );
}