import { useEffect, useState } from 'react';
import Counter from '../Counter/Counter';
import './Game.scss';

const Game = () => {
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
				<div className='Game-picture'>
					<img src={waifu} alt='' className='Game-img' loading='lazy' />
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
