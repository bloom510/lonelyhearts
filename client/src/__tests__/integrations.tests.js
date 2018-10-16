import React from 'react';
import { mount, shallow } from 'enzyme';
import axios from 'axios';
import moxios from 'moxios';
import Results from '../components/search/form/Results';
import Search from '../components/search';

// Configure moxios so Enzyme can correctly parse AJAX requests
beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://randomuser.me/api/?results=10', {
        status: 200,
        response: [{ name: 'Fetched User 1' }, { name: 'Fetched User 2' }]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('receives 10 mock profiles from the API request', async () => {
    const wrapped = mount(<Search />);
    await wrapped.instance().componentDidMount()
    wrapped.update();
    expect(wrapped.state(`search`).length).toEqual(10)
    wrapped.unmount();
});

it('displays 10 results after receiving data', async () => {
    const wrapped = shallow(<Search />);
    await wrapped.instance().componentDidMount()
    wrapped.update();
    expect(wrapped.find(Results).dive().find('.results').length).toEqual(10);
    wrapped.unmount();
});
