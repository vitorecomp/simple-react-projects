'use strict';

console.log('teste');

//functions
var app = {
	title: 'Indesion App',
	subtitle: 'This is a test',
	location: 'newYork'

	//html template
};var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		' ',
		app.subtitle,
		' '
	)
);

//render
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
