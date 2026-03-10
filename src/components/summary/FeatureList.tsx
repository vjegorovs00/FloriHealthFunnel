'use client';

import Image from "next/image";

import tickBox from "@/assets/step-6/tickBox.png";

const FEATURES = [
  'Personalized Meal Plans',
  'CBT Strategies',
  'Habit-Building Guidance',
  'Mindset Coaching',
  'Long-Term Maintenance Tools',
  'Progress Tracking',    
];
export function FeautreCard(){
    return(
        <div className="flex h-full flex-col justify-center w-full md:items-end">
            <p className="text-[28px] font-proxima pb-6.25 w-full md:text-right px-[75px]">Here’s a look at <br/>what you’ll get.</p>
            <ul className="space-y-3 font-montserrat text-[#323234]">
                {FEATURES.map((text) => (
                    <li key={text} className="flex items-center gap-3">
                        <Image src={tickBox} alt="tick box included"/>
                        <span className="font-normal text-[16px]">{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}