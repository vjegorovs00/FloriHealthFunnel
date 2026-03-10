'use client'

import React, {createContext, useContext, useState} from 'react';

type System = 'metric' | 'imperial';

type MetricField = {
    system: System;
    value: number;
};

type WizardState = {
    height?: MetricField;
    weight?: MetricField;
    targetWeight?: MetricField;
    email?: string;
    agreedDataPolicy?: boolean;
    sessionId: string;
};

type WizardContextValue = {
    state: WizardState;
    setHeight: (data: MetricField) => void;
    setWeight: (data: MetricField) => void;
    setTargetWeight: (data: MetricField) => void;
    setEmail: (email: string) => void;
    setAgreedDataPolicy: (agreed: boolean) => void;
};

const WizardContext = createContext<WizardContextValue | undefined>(undefined);

export function useWizard(){
    const ctx = useContext(WizardContext);
    if(!ctx) {
        throw new Error('useWizard must be used within WizardProvider');
    }
    return ctx;
}

export function WizardProvider({children}: {children: React.ReactNode}){
    const [state, setState] = useState<WizardState>(() =>({
        sessionId:
            typeof crypto !== 'undefined' && 'randomUUID 'in crypto
            ? crypto.randomUUID()
            : `sess_${Math.random().toString(36).slice(2)}`,
    }));

    const setHeight = (data: MetricField) => {
        setState((prev) => ({...prev, height: data}));
    };

    const setWeight = (data: MetricField) => {
        setState((prev) => ({ ...prev, weight: data }));
    };

    const setTargetWeight = (data: MetricField) => {
        setState((prev) => ({ ...prev, targetWeight: data }));
    };

    const setEmail = (email: string) => {
    setState(prev => ({ ...prev, email }));
    };

    const setAgreedDataPolicy = (agreed: boolean) => {
    setState(prev => ({ ...prev, agreedDataPolicy: agreed }));
    };

    return(
        <WizardContext.Provider value={{state, setHeight, setWeight, setTargetWeight, setEmail, setAgreedDataPolicy}}>
            {children}
        </WizardContext.Provider>
    );
}
