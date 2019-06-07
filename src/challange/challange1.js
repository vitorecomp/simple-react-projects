

let visi = false;
const changeVisi = function () {
	visi = !visi
	rederCountApp()
}


const rederCountApp = () => {
	//html template
	const template = (
		<div>
			<h1>Visibily App</h1>
			<button onClick={changeVisi}>{!visi ? 'Show detail' : 'Hide details'}</button>
			{visi && (<p>'Some detail'</p>)}
		</div>
	)

	//render
	var appRoot = document.getElementById('app')
	ReactDOM.render(template, appRoot)
}

rederCountApp()