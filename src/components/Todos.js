import React from 'react';

function Todos(props) {
	const itemList = props.items.map(item => {
		return <li key={item.id}><input type="checkbox"/><span> {item.text}</span></li>
	});

	return (
			<div className="App">
				<form onSubmit={props.addItem}>
					<input 
					name="text" 
					type="text" 
					onChange={props.handleChange}
					value={props.currentItem.text}
					/>
					<button>Submit</button>
				</form>
				<ul>
					{itemList}
				</ul>
			</div>
		)
}

export default Todos