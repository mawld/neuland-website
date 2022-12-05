import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Projects from './pages/projects';
import Blogs from './pages/projects';
import SignUp from './pages/members';
import Contact from './pages/join';
import About from './pages/about';
import Veranstaltungen from './pages/Veranstaltungen';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/projects' element={<Projects/>} />
		<Route path='/join' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/members' element={<SignUp/>} />
		<Route path='/About' element={<About/>} />
		<Route path='/Veranstaltungen' element={<Veranstaltungen/>} />
	</Routes>
	</Router>
);
}

export default App;
