'use client'

import Image from "next/image";

import beforeAfter from "@/assets/step-6/beforeAfter.png"
import line from "@/assets/step-6/line.png"

export function BodyFatCard(){
    return(
        <div className="rounded-3xl bg-white p-8 drop-shadow-xl h-[453px]">
            <div className="mb-4 flex text-[18px] font-bold text-[#000000] items-center justify-between font-proxima">
                <span className="text-center w-full">Now</span>
                <Image src={line} alt="Separate line"/>
                <span className="w-full text-center">After the plan</span>
            </div>

            <div  className="overflow-hidden rounded-3xl pb-4">
                <Image src={beforeAfter} alt="Before and after the plan" className="w-full object-cover h-[152px]" />
            </div>

            <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-stretch text-center text-xs font-montserrat text-[#6F6A66]">
                {/* Left column */}
                        <div className="space-y-2 font-proxima pr-6">
                            <p className="text-[14px] font-bold tracking-[0.12em] text-[#000000]">BODY FAT</p>
                            <div className="rounded-lg bg-[#F9F9F9] px-3 py-3.5 font-medium text-[20px] text-[#3F1E1E]">
                                31% - 37%
                            </div>
                            <p className="text-[18px] font-bold text-[#000000] mt-3.5">
                                Over-fat weight
                            </p>
                        </div>

                {/* Vertical divider */}
                     <div className="w-px bg-[#DDDDDDDD]" />

                {/* Right column */}
                    <div className="space-y-2 font-proxima pl-6">
                        <p className="text-[14px] font-bold tracking-[0.12em] text-[#000000]">BODY FAT</p>
                        <div className="rounded-lg bg-[#F9F9F9] px-3 py-3.5 font-medium text-[20px] text-[#3F1E1E]">
                            20% - 23%
                        </div>
                        <p className="text-[18px] font-bold text-[#000000] mt-3.5">
                            Healthy weight
                        </p>
                </div>
            </div>
        </div>
    );
}