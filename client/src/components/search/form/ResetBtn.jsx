import React from 'react';
import { Button } from 'antd';
import { searchBtnStyles } from '../../../styles'

export const ResetBtn = props => (
    <Button 
    // size='small'
     style={{width:100}}
     disabled={props.disabled} onClick={() => props.handleReset()} 
    >Reset</Button>
);