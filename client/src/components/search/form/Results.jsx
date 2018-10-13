import React, { Component } from 'react';
import { Card, Avatar, Popover } from 'antd';
import { ContactBtn } from './ContactBtn';
import { resultsStyle } from '../../../styles';

const { Meta } = Card;

export default class Results extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    }
    this.toNameCase = this.toNameCase.bind(this);
  }

  toNameCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { data, loading, isPhone } = this.props;
      const content = loading ?
      (<div>
          Loading...
          <hr />
          {
            data.map((o,n) => (
              <Card key={n} style={resultsStyle.card} loading={loading} />
            ))
          }
        </div>
      ) : 
      (<div>
        {data.length} results found.
          <hr />
          {
              data.map((o,n) => {
              const firstName = this.toNameCase(o.name.first);
              const lastName = this.toNameCase(o.name.last);
              return (
                <Card 
                title={
                  <div>
                    <Avatar size={100} src={o.picture.large} />
                    <h3>{firstName} {lastName}</h3>
                    Age: {o.dob.age}
                  <p>
                    <ContactBtn 
                      isPhone={isPhone} 
                      info={{
                        name: firstName, 
                        phone: o.phone, 
                        cell: o.cell, 
                        email: o.email 
                        }} />
                  </p>
                  </div>
                }
                key={n} 
                style={{width: isPhone ? 300 : 600, ...resultsStyle.card}} 
                loading={loading} />
            )})
          }
        </div>)
    
    return (
      <div style={resultsStyle}>
        { content } 
      </div>
    );
  }
}


