import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, className, ...props}) => {



    return (
        <button className={`${className} custom-button`} {...props}>
            {children}
        </button>
    );
};

export default CustomButton;

