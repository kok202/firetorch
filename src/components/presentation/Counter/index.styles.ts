import styled from 'styled-components';
import themes from 'src/styles/DefaultTheme';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.counter {
		font-size: 64px;
		font-weight: 400;
		padding: 32px;
	}

	.handler {
		display: flex;
		flex-direction: row;

		.button {
			color: ${themes.color.white};
			background-color: ${themes.color.primary};
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100px;
			padding: 16px 32px;
			margin: 8px;
			cursor: pointer;
		}
	}
`;
