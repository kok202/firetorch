import styled from 'styled-components';
import themes from 'src/styles/DefaultTheme';

export const Container = styled.nav`
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 60px;
	border-bottom: 1px solid ${themes.color.grey_300};

	@media screen and (min-width: ${themes.media.medium}) {
		flex-direction: row;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.logo {
			background: white;
			display: flex;
			color: black;
			padding: 10px;
			transition: all 0.1s ease;
		}

		.hamburger {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			padding: 10px;

			@media screen and (min-width: ${themes.media.medium}) {
				display: none;
			}
		}
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;

		.list {
			display: flex;
			flex-direction: column;
			height: 0px;
			overflow: hidden;
			transition: all 0.2s ease;

			&.open {
				height: 140px;
			}

			@media screen and (min-width: ${themes.media.medium}) {
				height: 100%;
				flex-direction: row;
			}

			.item {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;

				.link {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100%;
					background: white;
					display: block;
					color: black;
					padding: 10px;
					text-align: center;
					transition: all 0.1s ease;

					&:hover {
						background: ${themes.color.grey_100};
					}

					@media screen and (min-width: ${themes.media.medium}) {
						display: flex;
						height: 100%;
					}
				}
			}
		}
	}
`;
