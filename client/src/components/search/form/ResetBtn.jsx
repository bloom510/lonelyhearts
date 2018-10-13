import React from 'react';
import { Button } from 'antd';
import { searchBtnStyles } from '../../../styles'

export const ResetBtn = props => (
    <Button disabled={props.disabled} onClick={() => props.handleReset()} 
    // style={searchBtnStyles}
    >Reset</Button>
);