import React from 'react'
import { shallow } from 'enzyme'

import ReactShallowRenderer from 'react-test-renderer/shallow'


import Header from '../../src/components/header'



test('should render header conrrectly', () => {
	const wrapper = shallow(<Header />)
	expect(wrapper.find('h1').text()).toBe('Expensify')
	expect(wrapper).toMatchSnapshot();

	const renderer = new ReactShallowRenderer()
	renderer.render(<Header />)
	expect(renderer.getRenderOutput()).toMatchSnapshot();
})
