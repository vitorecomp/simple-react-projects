//functions
const app = {
	title: 'Indesion App',
	subtitle: 'This is a test',
	options: []
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

let count = 0;
const sum = function () {
	count++
	rederCountApp()
}
const sub = function () {
	count--
	rederCountApp()
}
const reset = function () {
	count = 0;
	rederCountApp()
}

const onFormSumit = (e) => {
	e.preventDefault()
	const option = e.target.elements.option.value
	if (option) {
		app.options.push(option)
	}
	rederCountApp()
}

const resetApp = function () {
	app.options = []
	rederCountApp()
}

const makeDesciopn = function () {
	const i = Math.floor(Math.random() * app.options.length);
	const option = app.options[i]
	alert(option)
}

const rederCountApp = () => {
	const templateOld = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={sum}> +1</button>
			<button onClick={sub}> -1</button>
			<button onClick={reset}>reset</button>
		</div>
	)

	//html template
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle ? <p> {app.subtitle} </p> : undefined}
			<p>{app.options.length}</p>
			<button onClick={makeDesciopn} disabled={app.options.length == 0}>I Should i do?</button>
			<button onClick={resetApp}> Remove itens. </button>
			<ol>
				{app.options.map((option) => <li key={option}>{option}</li>)}
			</ol>
			<form onSubmit={onFormSumit} >
				<input type="text" name="option"></input>
				<button>Add Option</button>
			</form>
		</div>
	)

	//render
	var appRoot = document.getElementById('app')
	ReactDOM.render(template, appRoot)
}

rederCountApp()