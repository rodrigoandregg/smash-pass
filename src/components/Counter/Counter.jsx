import './Counter.scss';

const Contador = ({ passCount, smashCount }) => {
	return (
		<>
			<div className='Counter'>
				<div className='Counter-wrapper'>
					<span className='Counter-number'>{passCount}</span>
				</div>
				<div className='Counter-wrapper'>
					<span className='Counter-number'>{smashCount}</span>
				</div>
			</div>
		</>
	);
};

export default Contador;
