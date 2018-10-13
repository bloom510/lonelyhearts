import React, { Component } from 'react';
import { Radio } from 'antd';
import { genderPickerStyle } from '../../../styles'

const RadioGroup = Radio.Group;

export const GenderPicker = props => (
    <div 
    // style={genderPickerStyle}
    >
        <h3 
        // style={genderPickerStyle.header}
        >Gender</h3>
        <RadioGroup onChange={(e) => props.handleChange(e,'gender')} value={props.value}>
            <Radio value='any'>Any</Radio>            
            <Radio value='male'>Male</Radio>
            <Radio value='female'>Female</Radio>
        </RadioGroup>
    </div>
);
