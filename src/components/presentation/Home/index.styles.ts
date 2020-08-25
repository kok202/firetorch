import styled from 'styled-components';
import themes from 'src/styles/DefaultTheme';

export const Container = styled.div`
	text-align: center;

	.App-logo {
		height: 180px;
		margin-bottom: 64px;
		pointer-events: none;
	}

	.App-header {
		background-color: #282c34;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: calc(10px + 2vmin);
		color: white;
	}

	.App-link {
		color: #61dafb;
	}

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
