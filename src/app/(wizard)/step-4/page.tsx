'use client';
import { useRouter } from "next/navigation";
import { MetricNumberStep } from "@/components/wizard/MetricNumberStep";
import { useWizard } from '../WizardProvider';

export default function Step4Page(){
    const router = useRouter();
    const {state, setTargetWeight} = useWizard();

    return(
        <div>
            <MetricNumberStep
                title="What is your dream weight?"
                label="Weight"
                metricUnit="kg"
                imperialUnit="lb"
                onSubmit={async ({system, value}) => {
                    console.log('height step', {system, value});
                    setTargetWeight({system, value});
                    router.push('/step-special');
                }}
                initialValue={state.targetWeight?.value}
                initialSystem={state.targetWeight?.system}
            />
        </div>
    );
}