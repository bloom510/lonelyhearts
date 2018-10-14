import React from 'react';
import { Button } from 'antd';
import { searchBtnStyles } from '../../../styles'

export const FilterBtn = props => {
    const { isPhone } = props;
    return(
        <Button 
        icon='search' type='primary' disabled={props.disabled} 
        style={{marginBottom: '2%', marginTop: '2%', marginRight: isPhone ? '5%' : '5%'}} 
        onClick={(e) => props.handleSubmit(e)}>Search</Button>
)};