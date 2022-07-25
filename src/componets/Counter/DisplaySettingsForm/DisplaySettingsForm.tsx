import React from 'react';
import st from './DisplaySettingsForm.module.css'
import {MinMax} from "../Counter";

type displaySettingsFormPropsTypes = {
    minMax: MinMax
    setMax: (max: number) => void
    setMin: (min: number) => void
}
export const DisplaySettingsForm: React.FC<displaySettingsFormPropsTypes> = (
    {
        minMax, setMin, setMax
    }
) => {
    const {min, max} = minMax

    const handlerOnChangeSetMin = (e: React.ChangeEvent<HTMLInputElement>) => setMin(e.currentTarget.valueAsNumber)
    const handlerOnChangeSetMax = (e: React.ChangeEvent<HTMLInputElement>) => setMax(e.currentTarget.valueAsNumber)

    return (
        <div className={st.container}>
            <div className={st.item}>
                <span>Max: </span>
                <input
                    className={minMax.max <= minMax.min || minMax.max < 0 ? st.error : ''}
                    value={max}
                    type={"number"}
                    onChange={handlerOnChangeSetMax}
                />
            </div>
            <div className={st.item}>
                <span>Min: </span>
                <input
                    className={minMax.max <= minMax.min || minMax.min < 0 ? st.error : ''}
                    value={min}
                    type={"number"}
                    onChange={handlerOnChangeSetMin}
                />
            </div>

        </div>
    );
};

