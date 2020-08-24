import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from 'src/pages/Home';
import AboutPage from 'src/pages/About';
import CounterPage from 'src/pages/Counter';
import NotFoundPage from 'src/pages/NotFound';
import NavigationBar from 'src/components/presentation/NavigationBar';
import UserLoginPage from 'src/pages/user/Login';
import UserMePage from './pages/user/Me';
import UserRegistPage from './pages/user/Regist';
import UserPage from './pages/User';
import { observer } from 'mobx-react';
import useStore from './hooks/useStore';
import UserSignupPage from './pages/user/Signup';
import UserInfoPage from './pages/user/Info';
import UserModifyPage from './pages/user/Modify';
import CONSTANTS from './utils/Constants';

const App = () => {
	const rootStore = useStore();
	useEffect(() => {
		rootStore.authStore.subscribeAuthChanged();
	}, []);

	return (
		<BrowserRouter>
			<NavigationBar />
			<Switch>
				<Route path={CONSTANTS.URL_ROOT} component={HomePage} exact />
				<Route path={CONSTANTS.URL_HOME} component={HomePage} />
				<Route path={CONSTANTS.URL_ABOUT} component={AboutPage} />
				<Route path={CONSTANTS.URL_COUNTER} component={CounterPage} />
				<Route path={CONSTANTS.URL_USER_MODIFY} component={UserModifyPage} />
				<Route path={CONSTANTS.URL_USER_SIGNUP} component={UserSignupPage} />
				<Route path={CONSTANTS.URL_USER_REGIST} component={UserRegistPage} />
				<Route path={CONSTANTS.URL_USER_LOGIN} component={UserLoginPage} />
				<Route path={CONSTANTS.URL_USER_ME} component={UserMePage} />
				<Route path={CONSTANTS.URL_USER_INFO} component={UserInfoPage} />
				<Route path={CONSTANTS.URL_USER} component={UserPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default observer(App);
