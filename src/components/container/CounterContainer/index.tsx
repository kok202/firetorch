import React from 'react';
import useStore from 'src/hooks/useStore';
import Counter from 'src/components/presentation/Counter';
import { observer } from 'mobx-react';

interface Props {}

const CounterContainer = (props: Props) => {
	const rootStore = useStore();
	return (
		<Counter
			counter={rootStore.counterStore.value}
			handleClearCounter={rootStore.counterStore.reset}
			handleAddCounter={() => rootStore.counterStore.add(1)}
			handleSubCounter={() => rootStore.counterStore.sub(1)}
		/>
	);
};

export default observer(CounterContainer);
