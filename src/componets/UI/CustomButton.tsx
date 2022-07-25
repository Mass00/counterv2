import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import st from './CustomButton.module.css'
type defaultButtonPropsTypes = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export const CustomButton:React.FC<defaultButtonPropsTypes> = (
    {
        className, ...rest
    }
) => {
    const finalClassName = className ? className : st.btn
    return <button className={finalClassName} {...rest}/>
};
