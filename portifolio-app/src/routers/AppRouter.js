import React from 'react'

import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom'

import Header from '../components/header.js'

import DashPage from '../components/dashboard-index.js'
import PortifolioPage from '../components/portifolio-index.js'
import PortifolioDetailPage from '../components/portifolio-detail-index.js'
import ContactPage from '../components/contact-index.js'
import NotFoundPage from '../components/notfound-index.js'



const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={DashPage} exact={true} />
				<Route path="/portifolio" component={PortifolioPage} exact={true} />
				<Route path="/portifolio/:id" component={PortifolioDetailPage} />
				<Route path="/contact" component={ContactPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter;