import React from 'react';
import { FilterBtn } from './FilterBtn';
import { ResetBtn } from './ResetBtn';
import { searchBtnStyles } from '../../../styles'

export const FormActions = props => (
    <div 
    // style={searchBtnStyles.container}
    >
        <FilterBtn disabled={props.disabled} handleSubmit={props.handleSubmit} />
        <ResetBtn disabled={props.disabled} handleReset={props.handleReset} />
    </div>
);