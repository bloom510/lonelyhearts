import React from 'react';
import { Button } from 'antd';
import { searchBtnStyles } from '../../../styles'

export const FilterBtn = props => (
    <Button icon='search' type='primary' disabled={props.disabled} 
    // style={searchBtnStyles} 
    onClick={(e) => props.handleSubmit(e)}>Search</Button>
);