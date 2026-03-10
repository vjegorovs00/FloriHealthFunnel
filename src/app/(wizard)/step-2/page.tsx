'use client';
import { useRouter } from "next/navigation";
import { MetricNumberStep } from "@/components/wizard/MetricNumberStep";
import { useWizard } from '../WizardProvider';

export default function Step2Page(){
    const router = useRouter();
    const {state, setHeight} = useWizard();

    return(
        <div>
            <MetricNumberStep
                title="What is your height?"
                label="Height"
                metricUnit="cm"
                imperialUnit="in"
                onSubmit={async ({system, value}) => {
                    console.log('height step', {system, value});
                    setHeight({system, value});
                    router.push('/step-3');
                }}
                initialValue={state.height?.value}
                initialSystem={state.height?.system}
            />
        </div>
    );
}