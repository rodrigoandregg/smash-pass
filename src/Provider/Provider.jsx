import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdMenuOpen, MdDownload } from 'react-icons/md';

const data = {
	header: {
		logo: {
			src: '',
			text: 'Jueguitos',
			title: 'Home',
			ruta: '/home',
		},
		nav: {
			icon: <MdMenuOpen />,
			menu: [
				{
					id: uuidv4(),
					text: 'Home',
					ruta: '/home',
				},
				{
					id: uuidv4(),
					text: 'Versus',
					ruta: '/Versus',
				},
				{
					id: uuidv4(),
					text: 'Quizes',
					ruta: '/Quizes',
				},
				{
					id: uuidv4(),
					text: 'FAQs',
					ruta: '/faqs',
				},
			],
		},
	},
	home: {
		games: {
			smashpass: {
				heading: 'Smash or Pass?',
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
			versus: {
				heading: 'Versus',
			},
			view: {
				download: {
					icon: <MdDownload />,
					title: 'Descargar Imagen',
				},
			},
		},
	},
};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
	return (
		<GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
	);
};
