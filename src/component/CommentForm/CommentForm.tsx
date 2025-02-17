import {ChangeEventHandler, FormEvent, useEffect, useState} from 'react';
import CommentFormStars from '../CommentFormStars/CommentFormStars.tsx';
import {PostReviewStatus} from '../../store/types.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/store.ts';
import {selectPostCommentStatus} from '../../store/selectors/commentsSelector.ts';
import {postComment} from '../../store/thunk/comments.ts';

export type TCommentFormProps = {
  offerId: string;
}

export type ReviewData = {
  comment: string;
  rating: number;
}

const commentInitialState = {
  comment: '',
  rating: 0,
};

const CommentForm = ({offerId}: TCommentFormProps) => {
  const [commentData, setComment] = useState<ReviewData>(commentInitialState);
  const reviewPostStatus = useAppSelector(selectPostCommentStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reviewPostStatus === PostReviewStatus.Success) {
      setComment(commentInitialState);
    }
  }, [reviewPostStatus]);

  const postCommentByUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postComment({ body: commentData, offerId }));
  };

  const getCommentHandler: (type: 'rating' | 'comment') => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (type) => (event) => {
    event.stopPropagation();

    const {target: {value}} = event;

    setComment((state) => ({...state, [type]: type === 'rating' ? Number(value) : value}));
  };

  return (
    <form onSubmit={(e) => postCommentByUser(e)} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <CommentFormStars
          commentData={commentData}
          getCommentHandler={getCommentHandler}
        />
      </div>
      <textarea
        onChange={getCommentHandler('comment')}
        value={commentData.comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={commentData.comment.length < 50 || !commentData.rating}
        >Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
