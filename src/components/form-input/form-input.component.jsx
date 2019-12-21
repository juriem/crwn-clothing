import React from 'react';

import { FormInputContainer, FormInputLabelContainer, GroupContainer } from "./form-input.styles";

const FormInput = ({ handleChange, label, value, ...otherProps }) => (

    <GroupContainer className='group'>
        <FormInputContainer className='form-input' onChange={handleChange} value={value} {...otherProps} />
        {
            label ? (
                <FormInputLabelContainer
                    className={`${value.length > 0 ? 'shrink' : ''} form-input-label`}
                >
                    {label}
                </FormInputLabelContainer>
            ) : null
        }
    </GroupContainer>
);

export default FormInput;