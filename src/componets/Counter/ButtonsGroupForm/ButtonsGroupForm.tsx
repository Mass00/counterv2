import React from 'react';
import st from './ButtonsGroupForm.module.css'
import {CustomButton} from "../../UI/CustomButton";
import {MinMax} from "../Counter";
type ButtonsGroupFormPropsTypes = {
    counter: number
    minMax: MinMax
    settings: boolean
    incCounter: () => void
    inzialCounter: () => void
    resCounter: () => void
    setVisibleSettings: () => void

}
export const ButtonsGroupForm:React.FC<ButtonsGroupFormPropsTypes> = (
    {
      incCounter, inzialCounter, resCounter,setVisibleSettings, minMax,settings,counter
    }
) => {
    let error = minMax.max <= minMax.min || minMax.max < 0 || minMax.min < 0

    const handlerOnClickSetMinMax = () => {
        if(settings && !error) {
            inzialCounter();
            setVisibleSettings();
        }else {
            setVisibleSettings();
        }
    }
    return (
        <div className={st.container}>
            <CustomButton
                disabled={settings || counter === minMax.max}
                onClick={incCounter}
            >Inc
            </CustomButton>
            <CustomButton
                disabled={settings || counter !== minMax.max}
                onClick={resCounter}
            >Res
            </CustomButton>
            <CustomButton
                disabled={error}
                onClick={handlerOnClickSetMinMax}
            >Set
            </CustomButton>
        </div>
    );
};