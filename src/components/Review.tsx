import React from 'react';
import styled from 'styled-components';
import { Card, Colors } from './styles';

export const Review = () => {
	return (
		<ReviewWrapper>
			<Author>Анна К.</Author>
			<Text>
				С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех
				пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не
				важно кто - герои, некроманты, или неизвестные науки расы, главное -
				обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в
				книжке &ldquo;Несносное проклятье некроманта&rdquo;.
			</Text>
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
