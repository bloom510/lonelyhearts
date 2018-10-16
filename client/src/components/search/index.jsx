import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Results from './form/Results';
import { AgePicker } from './form/AgePicker';
import { GenderPicker } from './form/GenderPicker';
import { FormActions } from './form/FormActions';
import { searchStyle } from '../../styles';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      ageRange: [21, 55],
      gender: 'any',
      data: [],
      search: new Array(10).fill(null),
      loading: true,
      isPhone: (() => this.getScreen(true))()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }

  async componentDidMount() {
    this.getScreen();
    let res = await fetch('https://randomuser.me/api/?results=10');
    let data = await res.json();
    this.setState({ data: data, search: data.results, loading: false })
  }

  handleChange(e, field) {
    // Note: Ant Design's dual slider automatically emits values for a given callback, eliminating the need to refer to it via e.target.value
    if(field === 'ageRange') {
      const val = e;
      this.setState({[field]: val})
    } else {
      this.setState({[field]: e.target.value})
    }
  }

  handleReset() {
    this.setState({ search: this.state.data.results, gender: 'any', ageRange: [21, 55] });
  }

  handleSubmit(e) {
    // e.preventDefault();
      const search = this.state.data.results.filter(i => { 
        if(this.state.gender != 'any') {
              return i.gender === this.state.gender && i.dob.age >= this.state.ageRange[0] && i.dob.age <= this.state.ageRange[1]       
        }
        return (i.dob.age >= this.state.ageRange[0] && i.dob.age <= this.state.ageRange[1])
      })
      this.setState({ search })
  }

  getScreen(init = false) {
    const initVal = window.innerWidth <= 621 ? true : false;
    if(init) return initVal;
    window.addEventListener('resize', () => {
      let isPhone = (() => window.innerWidth <= 621 ? true : false)();
      console.log(isPhone, window.innerWidth)
      this.setState({ isPhone });
    })
  }

  render() {
    const { isPhone } = this.state;
    return (
      <div>
        <div className='search' style={searchStyle}>
          <h1 style={searchStyle.header}>Search Criteria</h1>
          
          <form onSubmit={this.handleSubmit}>

          <Row>
          <Col md={9} sm={12} xs={12}>
            <AgePicker 
            ageRange={this.state.ageRange} 
            orientation={isPhone} 
            handleChange={this.handleChange} />
          </Col>
         

          <Col md={9} sm={12} xs={3}>
            <GenderPicker value={this.state.gender} handleChange={this.handleChange}  />
          </Col>  
          <Col md={6} sm={12} xs={12}>
            <FormActions 
             isPhone={isPhone}
             disabled={this.state.loading} 
             handleReset={this.handleReset} 
             handleSubmit={this.handleSubmit} />
          </Col>
          </Row>
          </form>
        </div>
          <Results loading={this.state.loading} data={this.state.search} isPhone={isPhone} />
      </div>
    );
  }
}
