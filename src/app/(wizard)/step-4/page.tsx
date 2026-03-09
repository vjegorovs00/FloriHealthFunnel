'use client';
import { useRouter } from "next/navigation";
import { MetricNumberStep } from "@/components/wizard/MetricNumberStep";

export default function Step4Page(){
    const router = useRouter();

    return(
        <div>
            <MetricNumberStep
                title="What is your dream weight?"
                label="Height"
                metricUnit="kg"
                imperialUnit="lb"
                onSubmit={async ({system, value}) => {
                    console.log('height step', {system, value})
                    router.push('/step-special')
                }}
            />
        </div>
    );
}