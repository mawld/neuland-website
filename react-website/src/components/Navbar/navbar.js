import React from "react";
import Link from "next/link";



const Navbar = () => {
return (
	<>
	<div className={Navbar.nav}>
		<div className={Navbar.navmenu}>
			<Link href="/about" className={Navbar.navlink}>
				<a>About<i className="fa fa-times"></i></a>
			</Link>
			<Link href="/members" className={Navbar.navlink}>
				Members<i className="fa fa-times"></i>
			</Link>
			<Link href="/join" className={Navbar.navlink}>
				Join Us<i className="fa fa-times"></i>
			</Link>
			<Link href="/projects" className={Navbar.navlink}>
				Projects<i className="fa fa-times"></i>
			</Link>
			<Link href="/Veranstaltungen" className={Navbar.navlink}>
				Events
			</Link>
		</div>
	</div>	
	</>
);
};

export default Navbar;
