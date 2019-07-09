import React from 'react'

import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom'

import Header from '../components/header.js'

import DashPage from '../components/dashboard-index.js'
import CreatePage from '../components/create-index.js'
import EditPage from '../components/edit-index.js'
import HelpPage from '../components/help-index.js'
import NotFoundPage from '../components/notfound-index.js'



const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={DashPage} exact={true} />
				<Route path="/create" component={CreatePage} />
				<Route path="/edit/:id" component={EditPage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter;