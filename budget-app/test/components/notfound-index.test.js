import React from 'react'
import { shallow } from 'enzyme'

import NotFoundPage from '../../src/components/notfound-index'



test('should render not-found conrrectly', () => {
	const wrapper = shallow(<NotFoundPage />)
	expect(wrapper.find('h1').text()).toBe('404!')
	expect(wrapper).toMatchSnapshot();
})
