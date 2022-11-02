import React, { FC } from 'react';
import styled from 'styled-components';
import { Card, Colors } from './styles';
import { IReview } from '../types/mockTypes';

interface ReviewProps {
	review: IReview;
}

export const Review: FC<ReviewProps> = ({ review }) => {
	const { user, text } = review;
	return (
		<ReviewWrapper>
			<Author>{user.name}</Author>
			<Text>{text}</Text>
		</ReviewWrapper>
	);
};

const ReviewWrapper = styled.blockquote`
	${Card};
	padding: 20px;
`;

const Author = styled.cite`
	display: block;
	font-style: normal;
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
`;
