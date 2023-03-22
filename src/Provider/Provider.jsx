import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const data = {
	header: {
		logo: {
			src: '',
			text: '',
			title: '',
		},
		nav: {
			icon: 'x',
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
};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
	return (
		<GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
	);
};
