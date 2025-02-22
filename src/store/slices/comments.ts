import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostReviewStatus, TCommentsState} from '../types.ts';
import {fetchOffersStatus} from './offers.ts';
import {fetchAllComments, postComment} from '../thunk/comments.ts';
import {TReview} from '../../mocks/reviews.ts';

const initialState: TCommentsState = {
  comments: [],
  status: '',
  reviewPostStatus: PostReviewStatus.Idle
};

const commentSlice = createSlice({
  initialState,
  name: 'comments',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllComments.pending, (state) => {
        state.status = fetchOffersStatus.Loading;
      })
      .addCase(fetchAllComments.fulfilled, (state, action: PayloadAction<TReview[]>) => {
        state.comments = action.payload;
        state.status = fetchOffersStatus.Done;
      })
      .addCase(fetchAllComments.rejected, (state) => {
        state.status = fetchOffersStatus.Error;
      })
      .addCase(postComment.pending, (state) => {
        state.reviewPostStatus = PostReviewStatus.Loading;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.reviewPostStatus = PostReviewStatus.Success;
      })
      .addCase(postComment.rejected, (state) => {
        state.reviewPostStatus = PostReviewStatus.Error;
      });
  },
});


const commentAction = commentSlice.actions;
export {commentSlice, commentAction};

