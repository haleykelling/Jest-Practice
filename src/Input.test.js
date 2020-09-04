import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { findByTestAttr } from '../test/testUtils';

const setup = (props={}) => {
    return shallow(<Input {...props}/>)
}

test('renders component without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
})