import React from 'react'
import { shallow } from 'enzyme'

import ExpenseItem from '../../src/components/expense-item'
import expenses from '../fixtures/expense.fixtures'


test('should render Expense item correctly, with expense item', () => {
	const wrapper = shallow(<ExpenseItem {...expenses[0]} />)
	expect(wrapper).toMatchSnapshot();
})

