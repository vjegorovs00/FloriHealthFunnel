'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Step5Page() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const canContinue = isEmailValid && agreed && !isSubmitting;

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canContinue) return;

    setIsSubmitting(true);
    // ...логика
    router.push('/step-6');
    setIsSubmitting(false);
    };


    return (
        <section className="flex min-h-full flex-col items-center justify-center text-center pt-16">
        <form
            onSubmit={handleSubmit}
            className="w-full space-y-6"
        >
            {/* header*/}
            <header className="space-y-6 pb-6">
            <p className="font-lora text-[32px] leading-snug text-foreground">
                Your custom plan for target <br/>weight:{' '}
                <span className="font-bold">82kg</span> is ready
            </p>
            <p className="font-proxima text-[20px] text-[#504F4F] font-light">
                Enter your email below
            </p>
            </header>

            {/* email input */}
            <div className="text-left">
            <label className="mb-1 block text-[20px] font-proxima text-[#6F6A66]">
                Email address
            </label>
            <input
                type="email"
                className="w-full rounded-xl border border-[#3F1E1E] bg-white px-4 h-[75px] text-[22px] outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            {/* checkbox */}
            <label className="flex items-start gap-2 text-left text-[16px] font-proxima text-[#2A2A2A]">
            <input
                type="checkbox"
                className="mt-[3px] h-4 w-4 rounded-[4px] accent-[var(--color-button)]"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className='font-medium'>
                I agree with <a className="underline font-bold" href='/dataPolicy'>Data Protection Policy</a>
            </span>
            </label>

            {/* button */}
            <button
            type="submit"
            disabled={!canContinue}
            className={`
                relative mt-2 w-full max-w-[456px] rounded-xl h-[53px]
                text-[14px] font-bold text-white
                ${canContinue ? 'button-active hover:opacity-90' : 'button-inActive cursor-not-allowed'}
            `}
            >
            <span className="pointer-events-none block text-center">
                Continue to Choose Your Plan
            </span>
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[14px]">
                &gt;
            </span>
            </button>

                {/* disclaimer */}
            <p className="mt-4 text-[14px] leading-relaxed text-[#AEAEAE] font-helvetica">
            We respect your privacy. We will never sell, rent or share your email
            address. That&apos;s more than a policy, it&apos;s our personal
            guarantee!
            </p>
        </form>
        </section>
    );
}
