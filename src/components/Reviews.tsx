import React from 'react';
import { Review } from './Review';
import styled from 'styled-components';

export const Reviews = () => {
	return (
		<ReviewsList>
			{/*{Вывод через li <Review/>}*/}
			<ReviewsItem>
				<Review />
			</ReviewsItem>
		</ReviewsList>
	);
};

const ReviewsList = styled.ul`
	list-style: none;
`;

const ReviewsItem = styled.li`
	:not(:last-child) {
		margin-bottom: 16px;
	}
`;
