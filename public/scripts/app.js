'use strict';

//functions
var app = {
	title: 'Indesion App',
	subtitle: 'This is a test',
	options: ['one', 'two']
};

var optionsRender = function optionsRender(app) {
	if (app.options.length == 0) return React.createElement(
		'p',
		null,
		'No Opitons\' '
	);

	return React.createElement(
		'div',
		null,
		React.createElement(
			'p',
			null,
			'Here are your options'
		),
		React.createElement(
			'ol',
			null,
			React.createElement(
				'li',
				null,
				app.options[0]
			),
			React.createElement(
				'li',
				null,
				app.options[1]
			)
		)
	);
};
//html template
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle ? React.createElement(
		'p',
		null,
		' ',
		app.subtitle,
		' '
	) : undefined,
	optionsRender(app)
);

//render
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
