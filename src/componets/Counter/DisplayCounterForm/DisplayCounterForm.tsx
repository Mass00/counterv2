import React from 'react';
import st from './DisplayCounterForm.module.css'
type displayFormPropsType = {
    counter: number
}
export const DisplayCounterForm:React.FC<displayFormPropsType> = (
    {
        counter
    }
) => {
    return (
        <div className={st.container}>
            <span>{counter}</span>
        </div>
    );
};