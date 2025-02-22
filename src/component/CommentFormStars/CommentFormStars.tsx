import {StarsData} from '../../consts.ts';
import {ChangeEventHandler, Fragment} from 'react';
import {ReviewData} from '../CommentForm/CommentForm.tsx';

type TCommentFormStarsProps = {
  commentData: ReviewData;
  getCommentHandler: (type: 'rating' | 'comment') => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const CommentFormStars = ({commentData, getCommentHandler}: TCommentFormStarsProps) => (
  <div className="reviews__rating-form form__rating">
    {StarsData.map(({value, title}) => (
      <Fragment key={value}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          checked={commentData.rating === value}
          value={value}
          id={`${value}-stars`}
          type="radio"
          onChange={getCommentHandler('rating')}
        />
        <label
          htmlFor={`${value}-stars`}
          className="reviews__rating-label form__rating-label"
          title={title}
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    ))}
  </div>
);

export default CommentFormStars;
