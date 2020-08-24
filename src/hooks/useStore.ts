import { useContext } from 'react';
import rootStoreContext from 'src/store';

const useStore = () => {
	const rootStore = useContext(rootStoreContext);
	return rootStore;
};

export default useStore;
