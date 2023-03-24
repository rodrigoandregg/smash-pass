import * as ReactDOM from 'react-dom/client';
import { App } from './src/App';
import './index.scss';
import { Provider } from './src/Provider/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider>
		<App />
	</Provider>
);
