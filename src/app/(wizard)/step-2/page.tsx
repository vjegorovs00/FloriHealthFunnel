'use client';
import { useRouter } from "next/navigation";
import { MetricNumberStep } from "@/components/wizard/MetricNumberStep";

export default function Step2Page(){
    const router = useRouter();

    return(
        <div>
            <MetricNumberStep
                title="What is your height?"
                label="Height"
                metricUnit="cm"
                imperialUnit="in"
                onSubmit={async ({system, value}) => {
                    console.log('height step', {system, value})
                    router.push('/step-3')
                }}
            />
        </div>
    );
}