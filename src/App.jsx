import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Bio from './components/pages/Bio';
import Contact from './components/pages/Contact';
import Faqs from './components/pages/Faqs';
import Home from './components/pages/Home';
import News from './components/pages/News';

export const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/bio' element={<Bio />} />
				<Route path='/' element={<Home />} />
				<Route path='/news' element={<News />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/faqs' element={<Faqs />} />
			</Routes>
		</Router>
	);
};
