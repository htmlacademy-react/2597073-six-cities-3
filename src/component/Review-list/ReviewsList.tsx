import ReviewsItem from '../Reviews-item/ReviewsItem.tsx';
import {TReview} from '../../mocks/reviews.ts';

export type ReviewsProps = {
  Reviews: TReview[];
}

const ReviewsList = ({Reviews}: ReviewsProps) => (
  <>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{Reviews.length}</span></h2>
    <ul className="reviews__list">
      {Reviews.map((review) => (
        <ReviewsItem key={review.id} review={review}/>
      ))}
    </ul>
  </>
);

export default ReviewsList;
