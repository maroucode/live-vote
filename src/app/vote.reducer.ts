import { Post } from './vote.state';
import * as POSTACTIONS from './vote.actions';
import { NEWVOTE } from './vote.actions';

export type Action = POSTACTIONS.ALL;
export const initialPostState = { text: 'new vote', likes: 0 };

export function voteReducer(state: Post = initialPostState, action: Action) {
  console.log(state, action.type);
  switch (action.type) {
    case 'UPVOTE': return  Object.assign({},state,{likes : state.likes+1} );
    case 'DOWNVOTE': return  Object.assign({}, state, {likes : state.likes-1} );
    case 'NEWVOTE': return  Object.assign({},state,{text :(action as NEWVOTE).playload, likes :0} );
    case 'RESET': return initialPostState;
    default:  
      return state;
  }
}
