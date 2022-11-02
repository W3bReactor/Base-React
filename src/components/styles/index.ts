import { css } from 'styled-components';

export enum Colors {
	DARK = '#000000',
	LIGHT = '#FFFFFF',
}

export const Container = css`
	max-width: 1200px;
	margin: 0 auto;
`;

export const Card = css`
	background-color: ${Colors.LIGHT};
	border-radius: 8px;
`;
