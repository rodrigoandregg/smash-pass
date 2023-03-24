import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdMenuOpen } from 'react-icons/md';

const data = {
	header: {
		logo: {
			src: '',
			text: 'Smash/Pass',
			title: 'Home',
		},
		nav: {
			icon: <MdMenuOpen />,
			menu: [
				{
					id: uuidv4(),
					text: 'bio',
					ruta: '/bio',
				},
				{
					id: uuidv4(),
					text: 'contact',
					ruta: '/contact',
				},
				{
					id: uuidv4(),
					text: 'news',
					ruta: '/news',
				},
				{
					id: uuidv4(),
					text: 'faqs',
					ruta: '/faqs',
				},
			],
		},
	},
	home: {
		game: {
			btns: [
				{
					id: uuidv4(),
					text: 'Pass',
				},
				{
					id: uuidv4(),
					text: 'Smash',
				},
			],
		},
	},
};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
	return (
		<GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
	);
};
