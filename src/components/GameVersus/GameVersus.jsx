import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Provider/Provider';
import './GameVersus.scss';

const GameVersus = ({ divRef }) => {
	const { home } = useContext(GlobalContext);
	const { games } = home;
	const { versus, view } = games;
	const { download } = view;
	const BASE_URL = 'https://api.waifu.im';
	const IMAGES_URL = `${BASE_URL}/search`;
	const [waifu1, setWaifu1] = useState([]);
	const [waifu2, setWaifu2] = useState([]);

	const consumeApiWaifu1 = async () => {
		try {
			const data = await fetch(IMAGES_URL);
			const dataJson = await data.json();
			const waifuImgSource1 = dataJson.images[0].url;
			setWaifu1(waifuImgSource1);
		} catch (error) {
			console.log(error);
		}
	};
	const consumeApiWaifu2 = async () => {
		try {
			const data = await fetch(IMAGES_URL);
			const dataJson = await data.json();
			const waifuImgSource2 = dataJson.images[0].url;
			setWaifu2(waifuImgSource2);
		} catch (error) {
			console.log(error);
		}
	};

	const consumeApi = () => {
		consumeApiWaifu1();
		consumeApiWaifu2();
	};

	useEffect(() => {
		consumeApi();
	}, []);

	return (
		<main className='main'>
			<section
				className='Versus'
				style={{
					background: `url(${waifu1}) center no-repeat`,
				}}
			>
				<div className='Versus-wrapper'>
					<h2 className='Versus-heading' ref={divRef}>
						{versus.heading}
					</h2>
					<div className='Versus-options'>
						<div className='Versus-picture'>
							<img src={waifu1} alt='' className='Versus-img' loading='lazy' />
							<div className='Versus-view'>
								<button onClick={consumeApi} className='Versus-btn'>
									Esta
								</button>
								<a
									href={waifu1}
									download='waifu-image'
									title={download.title}
									target='_blank'
									rel='noopener noreferrer'
									className='Versus-download'
								>
									{download.icon}
								</a>
							</div>
						</div>
						<div className='Versus-picture'>
							<img src={waifu2} alt='' className='Versus-img' loading='lazy' />
							<div className='Versus-view'>
								<button onClick={consumeApi} className='Versus-btn'>
									Esta
								</button>
								<a
									href={waifu2}
									download='waifu-image'
									title={download.title}
									target='_blank'
									rel='noopener noreferrer'
									className='Versus-download'
								>
									{download.icon}
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default GameVersus;
