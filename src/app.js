//functions
const app = {
	title: 'Indesion App',
	subtitle: 'This is a test',
	options: [
		'one',
		'two'
	]
}

const optionsRender = (app) => {
	if (app.options.length == 0)
		return <p>No Opitons' </p>

	return <div>
		<p>Here are your options</p>
		<ol>
			<li>{app.options[0]}</li>
			<li>{app.options[1]}</li>
		</ol>
	</div>
}
//html template
const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle ? <p> {app.subtitle} </p> : undefined}
		{optionsRender(app)}
	</div>
)



//render
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)