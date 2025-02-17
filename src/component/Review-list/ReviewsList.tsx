import ReviewsItem from '../Reviews-item/ReviewsItem.tsx';
import {TReview} from '../../mocks/reviews.ts';

const ReviewsList = ({reviews}: {reviews: TReview[]}) => (
  <>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review}/>
      ))}
    </ul>
  </>
);

export default ReviewsList;
