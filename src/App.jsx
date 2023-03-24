import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import Contact from './components/pages/Contact';
import Faqs from './components/pages/Faqs';
import Home from './components/pages/Home';
import News from './components/pages/News';

export const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/home' element={<Navigate to='/' />} />
				<Route path='/news' element={<News />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/faqs' element={<Faqs />} />
			</Routes>
		</Router>
	);
};
