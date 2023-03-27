import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Provider/Provider';
import Counter from '../Counter/Counter';
import './GameSmashPass.scss';

const GameSmashPass = ({ divRef }) => {
	const { home } = useContext(GlobalContext);
	const { games } = home;
	const { view, smashpass } = games;
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
			className='Smashpass'
			style={{
				background: `url(${waifu}) center no-repeat`,
			}}
		>
			<div className='Smashpass-wrapper'>
				<h2 className='Smashpass-heading' ref={divRef}>
					{smashpass.heading}
				</h2>
				<div className='Smashpass-picture'>
					<img src={waifu} alt='' className='Smashpass-img' loading='lazy' />
					<div className='Smashpass-view'>
						<a
							href={waifu}
							download='waifu-image'
							title={download.title}
							target='_blank'
							rel='noopener noreferrer'
							className='Smashpass-download'
						>
							{download.icon}
						</a>
					</div>
				</div>
				<div className='Smashpass-options'>
					<button onClick={handleClickPass} className='Smashpass-btn'>
						Pass
					</button>
					<button onClick={handleClickSmash} className='Smashpass-btn'>
						Smash
					</button>
				</div>
				<Counter passCount={passCount} smashCount={smashCount} />
			</div>
		</section>
	);
};

export default GameSmashPass;
