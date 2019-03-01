import React from 'react';

function Todos(props) {
	return (
			<div className="App">
				<div>
					<input type="checkbox"/><span> {props.todoItems[0].text}</span>
				</div>
				<form>
					<input type="text"/>
					<button onClick={props.submit}>Submit</button>
				</form>
			</div>
		)
}

export default Todos