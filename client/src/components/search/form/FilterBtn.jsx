import React from 'react';
import { Button } from 'antd';
import { searchBtnStyles } from '../../../styles'

export const FilterBtn = props => {
    const { isPhone } = props;
    return(
        <Button 
        icon='search' type='primary' disabled={props.disabled} 
        style={{marginBottom: isPhone ? '2%' : 0, marginTop: isPhone ? '4%' : 0}} 
        onClick={(e) => props.handleSubmit(e)}>Search</Button>
)};