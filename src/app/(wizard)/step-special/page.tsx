'use client'

import { useRouter } from "next/navigation";

export default function StepSpecial(){
    const router = useRouter();
    const handleNext = () => {
        // next add previous value instead of {10kg}
        router.push('/step-5');
    }
    return(
        <section className="flex flex-col items-center justify-center text-center gap-12.5 min-h-[calc(100vh-160px)]">
            <div className="flex flex-col font-lora gap-6 text-foreground">
                <p className="leading-snug text-[40px]">
                    ✨<br/><span className="font-semibold">10 kg</span> to your goal—let's<br/> make it happen.
                </p>
                <p className="text-[24px]">
                    Setting a clear target means you're <br/> ready. Let's keep building your plan.
                </p>
            </div>
            <button
                type="button"
                onClick={handleNext}
                className="mt-4 w-full rounded-xl text-white
                button-active transition-colors duration-200 hover:opacity-90 h-[53px]"
            >
                Next
            </button>
        </section>
    );
}