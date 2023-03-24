import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../Provider/Provider';
import { Link } from 'react-router-dom';

export const Header = () => {
	const { header } = useContext(GlobalContext);
	const { logo, nav } = header;
	const { menu } = nav;
	const [estadoMenu, setEstadoMenu] = useState('closed');

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
	}, []);

	const refMenu = useRef();

	const handleClickOutside = e => {
		if (!refMenu.current.contains(e.target)) {
			setEstadoMenu('closed');
		} else {
			setEstadoMenu('open');
		}
	};

	return (
		<header className='Header'>
			<h1 className='Header-h1'>{logo.text}</h1>
			<nav className='Header-nav'>
				<ul
					ref={refMenu}
					className={`Header-menu ${
						estadoMenu === 'open' ? 'Header-menu--open' : ''
					}`}
					onMouseOver={() => setEstadoMenu('open')}
					onMouseLeave={() => setEstadoMenu('closed')}
				>
					{estadoMenu === 'closed' ? (
						<li className='Header-icon'>{nav.icon}</li>
					) : (
						menu.map(option => (
							<Link
								to={option.ruta}
								key={option.id}
								onClick={() => setEstadoMenu('closed')}
							>
								<li className='Header-item'>
									<span className='Header-link'>{option.text}</span>
								</li>
							</Link>
						))
					)}
				</ul>
			</nav>
		</header>
	);
};
