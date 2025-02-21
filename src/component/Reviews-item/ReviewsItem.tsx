import {ratingCalculate} from '../../utils.ts';
import {TReview} from './types.ts';

type ReviewProps = {
  review: TReview;
}

const ReviewsList = ({review}: ReviewProps) => {
  const {name, avatarUrl} = review.user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingCalculate(review.rating)}`}}></span>
            <span className="visually-hidden">{review.rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{review.date.substring(0,9)}</time>
      </div>
    </li>
  );
};

export default ReviewsList;
