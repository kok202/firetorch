import styled from 'styled-components';
import themes from 'src/styles/DefaultTheme';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.row {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		flex-direction: row;

		.label {
			font-size: 32px;
			padding: 16px;
			width: 300px;
		}
		.value {
			font-size: 32px;
			padding: 16px;
			width: 300px;
		}

		.button {
			color: ${themes.color.white};
			background-color: ${themes.color.primary};
			width: 150px;
			padding: 16px 32px;
			margin: 8px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}
	}
`;
