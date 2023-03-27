import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { useEffect, useRef, useState } from 'react';
import Home from './components/pages/Home/Home';
import Versus from './components/pages/Versus/Versus';
import Quizes from './components/pages/Quizes/Quizes';
import Faqs from './components/pages/Faqs/Faqs';

export const App = () => {
	const [cosa, setCosa] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			const refDiv = divRef.current;
			const { y } = refDiv.getBoundingClientRect();
			y >= 0 ? setCosa('') : setCosa('down');
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const divRef = useRef();
	return (
		<HashRouter>
			<Header cosa={cosa} />
			<Routes>
				<Route exact path='/' element={<Home divRef={divRef} />} />
				<Route path='/home' element={<Navigate to='/' />} />
				<Route path='/versus' element={<Versus />} />
				<Route path='/quizes' element={<Quizes />} />
				<Route path='/faqs' element={<Faqs />} />
			</Routes>
		</HashRouter>
	);
};
