import React from 'react'
import {
	Link,
} from 'react-router-dom'

const CreatePage = () => (
	<div>
		<h1> Portifolios </h1>
		<br />
		<Link to="/portifolio/1"> Portifolio 1</Link>
		<br />
		<Link to="/portifolio/2"> Portifolio 2</Link>
		<br />
	</div>
)



export default CreatePage;