/**
 * ************************************
 *
 * @module  postsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

//import action types here
import * as types from '../constants/actionTypes';

const initialState = {
  //initial state here
  postList: [],
};

const postsReducer = (state = initialState, action) => {
  let postList;

  switch (action.type) {
    case types.UPDATE_POSTS:
      const posts = action.payload;
      postList = state.postList.slice();

    //push markets on market list
  }
};

export default postsReducer;
