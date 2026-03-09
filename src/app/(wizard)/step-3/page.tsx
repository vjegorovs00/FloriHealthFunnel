'use client';
import { useRouter } from "next/navigation";
import { MetricNumberStep } from "@/components/wizard/MetricNumberStep";

export default function Step3Page(){
    const router = useRouter();

    return(
        <div>
            <MetricNumberStep
                title="What is your weight?"
                label="Height"
                metricUnit="kg"
                imperialUnit="lb"
                onSubmit={async ({system, value}) => {
                    console.log('height step', {system, value})
                    router.push('/step-4')
                }}
            />
        </div>
    );
}