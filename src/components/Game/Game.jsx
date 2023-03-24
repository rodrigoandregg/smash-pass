import { useEffect, useState } from 'react';

const Game = () => {
	const BASE_URL = 'https://api.waifu.im';
	const IMAGES_URL = `${BASE_URL}/search`;
	const [waifu, setWaifu] = useState([]);
	// const [waifuColor, setWaifuColor] = useState('');

	useEffect(() => {
		consumeApiWaifu();
	}, []);

	const consumeApiWaifu = async () => {
		try {
			const data = await fetch(IMAGES_URL);
			const dataJson = await data.json();
			const waifuImgSource = dataJson.images[0].url;
			// const waifuDominantColor = dataJson.images[0].dominant_color;
			setWaifu(waifuImgSource);
			// setWaifuColor(waifuDominantColor);
			console.log(waifu);
		} catch (error) {
			console.log(error);
		}
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
					<img src={waifu} alt='' className='Game-img' />
				</div>
				<div className='Game-options'>
					<button onClick={consumeApiWaifu} className='Game-btn'>
						Pass
					</button>
					<button onClick={consumeApiWaifu} className='Game-btn'>
						Smash
					</button>
				</div>
			</div>
		</section>
	);
};

export default Game;
