import React from 'react';

import './header.css';

const Header = (props) => {
	const {
		rockets,
		changeRocket,
	} = props;

  return (
    <>
      <header className="header">
	    	<img
	    		src="./img/logo.svg"
	    		alt="Logo Space X"
	    		className="logo"
	    	/>
	    	<nav className="main-nav nav">
	    		<ul className="list">
						{
							rockets.map((item, i) => {
								return (
									<li className="item" key={i}>
	    							<a
											href="/"
											className="item-link"
											onClick={e => {
												e.preventDefault();
												changeRocket(item);
											}}>
												{item}
											</a>
	    						</li>
								);
							})
						}
	    		</ul>
	    	</nav>
	    	<nav className="secondary-nav">
	    		<ul className="list">
	    			<li className="item">
	    				<a href="/" className="item-link">Home</a>
	    			</li>
	    			<li className="item">
	    				<a href="calendar.html" className="item-link">Calendar</a>
	    			</li>
	    		</ul>
	    	</nav>
	    </header>
    </>
  );
};

export default Header;
