import {RootState} from '../types.ts';

export const selectAllComments = (state: RootState) => state.comments.comments;
export const selectPostCommentStatus = (state: RootState) => state.comments.reviewPostStatus;
