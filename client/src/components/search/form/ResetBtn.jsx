import React from 'react';
import { Button } from 'antd';
import { searchBtnStyles } from '../../../styles'

export const ResetBtn = props => {
    const { isPhone } = props;
    return (
        <Button 
        // size='small'
        style={{width:100, height:33}}
        disabled={props.disabled} onClick={() => props.handleReset()} 
        >Reset</Button>
    )
}