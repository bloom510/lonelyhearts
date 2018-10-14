
import React, { Component } from 'react';
import { Form, Input, Slider } from 'antd';
import { agePickerStyles } from '../../../styles'
import '../../../styles/slider.css';

const FormItem = Form.Item;

export const AgePicker = props => {
      const { ageRange, orientation, handleChange } = props;
      return (
            <div>
            <h3>Age <small>(Select a range)</small></h3>
                  <Slider 
                  className='slider'
                  style={{ height: 200 }}
                  // vertical={orientation}
                  range 
                  value={ageRange}
                  defaultValue={ageRange} 
                  min={18} 
                  max={100} 
                  onChange={(e) => handleChange(e, 'ageRange')} />
            </div>
      );    
}
  

















