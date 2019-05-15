console.log('teste')

//functions
let app = {
	title: 'Indesion App',
	subtitle: 'This is a test',
	location: 'newYork'
}


//html template
var template = (
	<div>
		<h1>{app.title}</h1>
		<p> {app.subtitle} </p>
	</div>
)


//render
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)