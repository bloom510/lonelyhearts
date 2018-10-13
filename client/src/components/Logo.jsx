import React from 'react';
import { Icon } from 'antd';
import { logoStyles } from '../styles';

export const Logo = () => (
    <div id='logo' style={logoStyles}>
        Lonely Hearts &nbsp;
        <Icon type="heart" theme="filled" style={{color: '#eb2f96'}} />
    </div>
);