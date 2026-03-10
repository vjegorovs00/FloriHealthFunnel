'use client'
import { useState } from "react";

import { BodyFatCard } from "@/components/summary/BodyFatCard";
import { WeightCard } from "@/components/summary/WeightCard";
import { FeautreCard } from "@/components/summary/FeatureList";
import { PlanList, type PlanId } from "@/components/summary/PlanList";
import { FinalCta } from "@/components/summary/FinalCta";

import { useWizard } from '../WizardProvider';

import { supabase } from '@/lib/supabaseClient';

// helper function:converter
function toKg(value: number, system: 'metric' | 'imperial') {
    return system === 'metric' ? value : value * 0.45;
}

function toCm(value: number, system: 'metric' | 'imperial') {
    return system === 'metric' ? value : value * 2.54;
}


export default function Step6Page(){
    const { state } = useWizard();
    const [selectedPlan, setSelectedPlan] = useState<PlanId>('6m');

    const weight_kg = state.weight ? toKg(state.weight.value, state.weight.system) : undefined;
    const target_weight_kg = state.targetWeight ? toKg(state.targetWeight.value, state.targetWeight.system) : undefined;
    const height_cm = state.height ? toCm(state.height.value, state.height.system) : undefined;


    const handleFinalSubmit = async () => {
        const timestamp = new Date().toISOString();

        const payload = {
            session_id: state.sessionId,
            created_at: timestamp,
            weight_kg: weight_kg ?? null,
            target_weight_kg: target_weight_kg ?? null,
            height_cm: height_cm ?? null,
            email: state.email ?? null,
            agreed_policy: state.agreedDataPolicy ?? false,
            plan_id: selectedPlan,
        };
        console.log('final submit', payload);

        const {error} = await supabase
            .from('wizard_submissions_final')
            .insert(payload);

            if (error){
                console.error('Supabase error', error);
                alert('Something odd happened, please try again later');
                return;
            }else {
                console.log('Success', payload);
                alert('Congratulation! Your plan has been saved!')
            }
    };

    return(
        <section className="flex min-h-full flex-col items-center gap-10 py-12">

            {/* Upper layer */}
            <div className="w-full max-w-[456px] space-y-6">
                <BodyFatCard/>
                <WeightCard current={state.weight?.value ?? 86} target={state.targetWeight?.value ?? 82}/>
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