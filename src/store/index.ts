import { createContext } from 'react';
import CounterStore from './CounterStore';
import AuthStore from './AuthStore';
import UserStore from './UserStore';

class RootStore {
	authStore: AuthStore;
	counterStore: CounterStore;
	userStore: UserStore;
	constructor() {
		this.authStore = new AuthStore();
		this.counterStore = new CounterStore();
		this.userStore = new UserStore();
	}
}

const rootStoreContext = createContext(new RootStore());

export default rootStoreContext;
