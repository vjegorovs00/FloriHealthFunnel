'use client';
import { useRouter } from "next/navigation";
import { MetricNumberStep } from "@/components/wizard/MetricNumberStep";
import { useWizard } from '../WizardProvider';

export default function Step3Page(){
    const router = useRouter();
    const {state, setWeight} = useWizard();

    return(
        <div>
            <MetricNumberStep
                title="What is your weight?"
                label="Weight"
                metricUnit="kg"
                imperialUnit="lb"
                onSubmit={async ({system, value}) => {
                    setWeight({system, value});
                    console.log('height step', {system, value})
                    router.push('/step-4')
                }}
                initialValue={state.weight?.value}
                initialSystem={state.weight?.system}
            />
        </div>
    );
}