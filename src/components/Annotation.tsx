import React, { FC } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Card, Colors } from './styles';

interface AnnotationProps {
	styles: FlattenSimpleInterpolation;
	text: string;
}

export const Annotation: FC<AnnotationProps> = ({ styles, text }) => {
	return (
		<AnnotationWrapper styles={styles}>
			<Title>Аннотация</Title>
			<Text>{text}</Text>
			<Text>
				Присоединяйся к дружной компании черных магов и просто любителей гулять
				по ночным кладбищам. Ведь с ними твоя жизнь заиграет всеми оттенками
				черного. Вперед, Тесса Грей!
			</Text>
		</AnnotationWrapper>
	);
};

const AnnotationWrapper = styled.section<{
	styles?: FlattenSimpleInterpolation;
}>`
	${Card};
	padding: 20px;
	${(props) => props.styles};
`;

const Title = styled.h2`
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	color: ${Colors.DARK};
	margin-bottom: 16px;
`;

const Text = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: ${Colors.DARK};
	:not(:last-child) {
		margin-bottom: 8px;
	}
`;
