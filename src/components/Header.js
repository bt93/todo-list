import React from 'react';


function Header(props) {
	return (
			<div className="App">
	        <header className="App-header">
	          <img src={props.logo} className="App-logo" alt="logo" />
	        </header>
	      	</div>
		)
}

export default Header;