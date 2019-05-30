'use strict';

//functions
var app = {
	title: 'Indesion App',
	subtitle: 'This is a test',
	options: []
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

var count = 0;
var sum = function sum() {
	count++;
	rederCountApp();
};
var sub = function sub() {
	count--;
	rederCountApp();
};
var reset = function reset() {
	count = 0;
	rederCountApp();
};

var onFormSumit = function onFormSumit(e) {
	e.preventDefault();
	var option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
	}
	rederCountApp();
};

var resetApp = function resetApp() {
	app.options = [];
	rederCountApp();
};

var rederCountApp = function rederCountApp() {
	var templateOld = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: sum },
			' +1'
		),
		React.createElement(
			'button',
			{ onClick: sub },
			' -1'
		),
		React.createElement(
			'button',
			{ onClick: reset },
			'reset'
		)
	);

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
		React.createElement(
			'p',
			null,
			app.options.length
		),
		optionsRender(app),
		React.createElement(
			'form',
			{ onSubmit: onFormSumit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		),
		React.createElement(
			'button',
			{ onClick: resetApp },
			' reset '
		)
	);

	//render
	var appRoot = document.getElementById('app');
	ReactDOM.render(template, appRoot);
};

rederCountApp();
