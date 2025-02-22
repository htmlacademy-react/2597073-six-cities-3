import ReviewsItem from '../Reviews-item/ReviewsItem.tsx';
import {useAppSelector} from '../../hooks/store.ts';
import {selectAllComments} from '../../store/selectors/commentsSelector.ts';

const ReviewsList = () => {
  const reviews = useAppSelector(selectAllComments);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem key={review.id} review={review}/>
        ))}
      </ul>
    </>
  );
};

export default ReviewsList;
