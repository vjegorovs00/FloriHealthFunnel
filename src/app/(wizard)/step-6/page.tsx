'use client'
import { useState } from "react";

import { BodyFatCard } from "@/components/summary/BodyFatCard";
import { WeightCard } from "@/components/summary/WeightCard";
import { FeautreCard } from "@/components/summary/FeatureList";
import { PlanList, type PlanId } from "@/components/summary/PlanList";
import { FinalCta } from "@/components/summary/FinalCta";


export default function Step6Page(){
    const [selectedPlan, setSelectedPlan] = useState<PlanId>('6m');

    const handleFinalSubmit = () => {
        // TODO implement supabase later
        console.log('final submit with plan', selectedPlan);
    };
    return(
        <section className="flex min-h-full flex-col items-center gap-10 py-12">

            {/* Upper layer */}
            <div className="w-full max-w-[456px] space-y-6">
                <BodyFatCard/>
                <WeightCard current={86} target={82}/>
            </div>

            {/* Plans */}
            <div className="w-full max-w-[880px] space-y-8">
                <h1 className="text-center font-lora font-light text-[40px] leading-snug text-foreground">
                    Your custom metabolic <br/>reset plan is ready
                </h1>

                <div className="mt-8 grid gap-16 md:grid-cols-2">
                    <FeautreCard/>
                    <PlanList selected={selectedPlan} onChange={setSelectedPlan}/>
                </div>
            </div>
                <div className="w-full max-w-[456px] space-y-6">
                    <FinalCta selectedPlan={selectedPlan} onClick={handleFinalSubmit}/>
                </div>
        </section>
    );
}