import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Provider/Provider';
import Counter from '../Counter/Counter';
import './Game.scss';

const Game = ({ divRef }) => {
	const { home } = useContext(GlobalContext);
	const { game } = home;
	const { view } = game;
	const { download } = view;
	const BASE_URL = 'https://api.waifu.im';
	const IMAGES_URL = `${BASE_URL}/search`;
	const [waifu, setWaifu] = useState([]);
	const [passCount, setPassCount] = useState(0);
	const [smashCount, setSmashCount] = useState(0);

	const consumeApiWaifu = async () => {
		try {
			const data = await fetch(IMAGES_URL);
			const dataJson = await data.json();
			const waifuImgSource = dataJson.images[0].url;
			setWaifu(waifuImgSource);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		consumeApiWaifu();
	}, [passCount, smashCount]);

	const handleClickPass = () => {
		setPassCount(passCount + 1);
	};

	const handleClickSmash = () => {
		setSmashCount(smashCount + 1);
	};

	return (
		<section
			className='Game'
			style={{
				background: `url(${waifu}) center no-repeat`,
			}}
		>
			<div className='Game-wrapper'>
				<div className='Game-picture' ref={divRef}>
					<img src={waifu} alt='' className='Game-img' loading='lazy' />
					<div className='Game-view'>
						<a
							href={waifu}
							download='waifu-image'
							title={download.title}
							target='_blank'
							rel='noopener noreferrer'
							className='Game-download'
						>
							{download.icon}
						</a>
					</div>
				</div>
				<div className='Game-options'>
					<button onClick={handleClickPass} className='Game-btn'>
						Pass
					</button>
					<button onClick={handleClickSmash} className='Game-btn'>
						Smash
					</button>
				</div>
				<Counter passCount={passCount} smashCount={smashCount} />
			</div>
		</section>
	);
};

export default Game;