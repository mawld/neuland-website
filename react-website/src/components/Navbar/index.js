import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About<i class="fa fa-times"></i>
		</NavLink>
		<NavLink to="/members" activeStyle>
			Members<i class="fa fa-times"></i>
		</NavLink>
		<NavLink to="/join" activeStyle>
			Join Us<i class="fa fa-times"></i>
		</NavLink>
		<NavLink to="/projects" activeStyle>
			Projects<i class="fa fa-times"></i>
		</NavLink>
		<NavLink to="/Veranstaltungen" activeStyle>
			Events
		</NavLink>
		</NavMenu>
	</Nav>	
	</>
);
};

export default Navbar;
