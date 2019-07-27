import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseList } from '../../src/components/expense-list'
import expenses from '../fixtures/expense.fixtures'


test('should render Expense list correctly, with expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={expenses} />)
	expect(wrapper).toMatchSnapshot();
})

test('should render Expense list correctly, with empty array', () => {
	const wrapper = shallow(<ExpenseList expenses={[]} />)
	expect(wrapper).toMatchSnapshot();
})
