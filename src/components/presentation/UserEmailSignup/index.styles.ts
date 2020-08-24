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
		padding: 16px;

		.label {
			font-size: 32px;
			padding: 16px;
			width: 300px;
		}
		.input {
			font-size: 32px;
			padding: 16px;
			width: 300px;
			border-bottom: 1px solid ${themes.color.black};
		}
	}

	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		padding: 32px;
		width: 100%;
		color: ${themes.color.error};
	}

	.email-signup {
		font-size: 32px;
		font-weight: 300;
		width: 600px;
		height: 60px;
		border: 1px solid ${themes.color.black};
		border-radius: 50px;
		cursor: pointer;
	}
`;
