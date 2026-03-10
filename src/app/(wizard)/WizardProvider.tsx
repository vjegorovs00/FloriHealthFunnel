'use client'

import React, {createContext, useContext, useState} from 'react';

type System = 'metric' | 'imperial';

type HeightData = {
    system: System;
    value: number;
};

type WizardState = {
    height?: HeightData;
    // later other values
};

type WizardContextValue = {
    state: WizardState;
    setHeight: (data: HeightData) => void;
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
    const [state, setState] = useState<WizardState>({});

    const setHeight = (data: HeightData) => {
        setState((prev) => ({...prev, height: data}));
    };

    return(
        <WizardContext.Provider value={{state, setHeight}}>
            {children}
        </WizardContext.Provider>
    );
}