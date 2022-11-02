import React, { FC, useState } from 'react';
import styled from 'styled-components';
import minus from '../assets/images/minus.svg';
import plus from '../assets/images/plus.svg';
import { Colors } from './styles';

export const Counter: FC = () => {
	const [count, setCount] = useState(0);

	return (
		<CounterWrapper>
			<CounterButton
				count={count}
				disabled={count === 0}
				onClick={() => setCount(count - 1)}
			>
				<img src={minus} alt="-" />
			</CounterButton>
			<CounterNumber count={count}>{count}</CounterNumber>
			<CounterButton count={count} onClick={() => setCount(count + 1)}>
				<img src={plus} alt="+" />
			</CounterButton>
		</CounterWrapper>
	);
};

const CounterWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const CounterNumber = styled.p<{ count?: number }>`
	margin: 0 24px;
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	color: ${Colors.DARK};
	transition: opacity 0.3s;
	opacity: ${(props) => props.count === 0 && '0.5'};
`;

const CounterButton = styled.button<{ count?: number }>`
	border: none;
	border-radius: 8px;
	width: 38px;
	height: 38px;
	background-color: ${Colors.DARK};
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	cursor: pointer;
	transition: opacity 0.3s;
	:first-child {
		${(props) => (props.count === 0 ? 'opacity: 0.5' : '')}
	}
`;
