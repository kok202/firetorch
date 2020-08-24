import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import rootStoreContext from './store/index';
import { I18nextProvider } from 'react-i18next';
import i18next from './lang/i18n';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import DefaultTheme from './styles/DefaultTheme';

ReactDOM.render(
	<React.StrictMode>
		<Provider rootStore={rootStoreContext}>
			<ThemeProvider theme={DefaultTheme}>
				<GlobalStyle />
				<I18nextProvider i18n={i18next}>
					<App />
				</I18nextProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
