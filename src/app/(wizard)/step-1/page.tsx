'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';

import hero from "@/assets/step-1/hero.png"

export default function Step1Page(){
    const router = useRouter();

    const handleSelectGoal = (goal: 'upto20' | '20to40' | '40plus') => {
    //    TODO save goal into state
        router.push('/step-2');
    }

    return(
        <section className="first-last-shell flex flex-col md:flex-row items-center md:gap-[87px] pt-16 pb-[320px]">
            
            {/* left column */}
            <div className="flex-1 space-y-8">
                <div className="flex h-[466px] flex-col justify-between pt-[58px] pb-[67px]">
                    
                    {/* upper text */}
                    <div className="space-y-4">
                        <h1 className="font-lora text-[40px]">
                            Metabolic Reset
                            <br/>
                            Program for Women
                        </h1>
                        <p className="font-montserrat text-[#323234]">
                            Designed specifically for women&apos;s changing <br/>bodies. Tailored to age, hormones, and psychology.
                        </p>
                    </div>
                    {/* bottom elements */}
                    <div>
                        <p className="font-montserrat text-[#323234] font-medium">Select your weight loss goal?</p>
                        {/* buttons */}
                        <div className="flex flex-wrap gap-3 font-helvetica mt-[20px]">
                            <button
                                type="button"
                                onClick={() => handleSelectGoal('upto20')}
                                className="rounded-xl w-[129px] h-[54px] font-semibold text-white button-active text-[14px]
                                transition-colors duration-200 hover:opacity-90"
                            >
                                Up to 20 lbs
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSelectGoal('20to40')}
                                className="rounded-xl w-[129px] h-[54px] font-semibold text-white button-active text-[14px]
                                transition-colors duration-200 hover:opacity-90"
                            >
                                20–40 lbs
                            </button>
                    
                            <button
                                type="button"
                                onClick={() => handleSelectGoal('40plus')}
                                className="rounded-xl w-[129px] h-[54px] font-semibold text-white button-active text-[14px]
                                transition-colors duration-200 hover:opacity-90"
                            >
                                40+ lbs
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right column */}
            <div className="flex-1 flex justify-end">
                <div className="relative h-[466px] w-[501px] max-w-full">
                    <Image
                        src={hero}
                        alt="Hero image"
                        className="rounded-[30px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}