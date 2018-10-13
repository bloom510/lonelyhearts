import React from 'react';
import { Button, Popover } from 'antd';

export const ContactBtn = props => {
    const { cell, email, name, phone } = props.info;
    const { isPhone } = props;
    const content = (
        <div>
            <p>
                Phone: {isPhone ? <a href={`tel:${phone}`}>{phone}</a> : phone}
            </p>
            <p>
                Cell: {isPhone ? <a href={`tel:${cell}`}>{cell}</a> : cell}
            </p>
            <p>
                Email: <a href={`mailto:${email}`}>{email}</a>
            </p>
        </div>
    );
    return (
    <Popover content={content} title={`Get in touch with ${name}`} trigger="click">
        <Button style={{marginTop: '3%'}} icon='smile' type='primary' size='large'>Contact Info</Button>    
    </Popover>
    );
}