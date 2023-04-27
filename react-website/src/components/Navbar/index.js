import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/members" activeStyle>
			Member</NavLink>
		<NavLink to="/join" activeStyle>
			Join Us
		</NavLink>
		<NavLink to="/projects" activeStyle>
			Projects
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
