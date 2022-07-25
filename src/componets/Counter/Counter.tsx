import React, {useState} from 'react';
import st from './Counter.module.css'
import {DisplayCounterForm} from "./DisplayCounterForm/DisplayCounterForm";
import {ButtonsGroupForm} from "./ButtonsGroupForm/ButtonsGroupForm";
import {DisplaySettingsForm} from "./DisplaySettingsForm/DisplaySettingsForm";
export type MinMax = {
    min: number
    max: number
}
export const Counter = () => {
    const [minMax, setMinMax] = useState<MinMax>({min: 0, max: 5})
    const [counter, setCounter] = useState<number>(minMax.min)
    const [settings, setSettings] = useState<boolean>(false)

    const incCounter = () => setCounter(prev => prev + 1)
    const inzialCounter = () => setCounter(minMax.min)
    const resCounter = () => setCounter(minMax.min)
    const setMax = (max: number) => setMinMax(prev => ({...prev,max}))
    const setMin = (min: number) => setMinMax(prev => ({...prev,min}))
    const setVisibleSettings = () => {
        setSettings(prev => !prev)
    }
    return (
        <div className={st.container}>
            {!settings ?
                <DisplayCounterForm
                    counter={counter}
                />
            :
                <DisplaySettingsForm
                    minMax={minMax}
                    setMax={setMax}
                    setMin={setMin}
                />
            }
            <ButtonsGroupForm
                counter={counter}
                minMax={minMax}
                settings={settings}
                incCounter={incCounter}
                inzialCounter={inzialCounter}
                resCounter={resCounter}
                setVisibleSettings={setVisibleSettings}
            />
        </div>
    );
};
