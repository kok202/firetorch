import { observable, action } from 'mobx';

class CounterStore {
	@observable
	value: number;

	constructor() {
		this.value = 0;
	}

	@action
	add = (value: number) => {
		this.value += value;
	};

	@action
	sub = (value: number) => {
		this.value -= value;
	};

	@action
	reset = () => {
		this.value = 0;
	};
}

export default CounterStore;
