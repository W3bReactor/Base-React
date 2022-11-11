import React, { FC } from 'react';
import { Review } from './Review';
import styled from 'styled-components';
import { IReview } from '../types/dataTypes';

interface ReviewsProps {
	reviews: IReview[];
}

export const Reviews: FC<ReviewsProps> = ({ reviews }) => {
	return (
		<ReviewsList>
			{reviews &&
				reviews.map((review) => (
					<ReviewsItem key={review.id}>
						<Review review={review} />
					</ReviewsItem>
				))}
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
