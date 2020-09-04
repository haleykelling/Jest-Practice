import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { findByTestAttr, checkProps } from '../test/testUtils';

const defaultProps = {secretWord: 'party'}

const setup = (props) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Input {...setupProps}/>)
}

test('renders component without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
});
test('does not throw warning with expected props', () => {
    checkProps(Input, defaultProps)
});