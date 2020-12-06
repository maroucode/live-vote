import { Component } from '@angular/core';
import { ActionReducerMap, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';


interface AppState{
  lang : string;
  count : Post;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  message$: Observable<String>;
  postText: string;
  vote: Observable<Post>;

  constructor(
    private store: Store<AppState>
  ) {
    this.vote = this.store.select('count');
    this.message$ = this.store.select('lang');
  }
  displayEnglish() {
    this.store.dispatch({ type: 'ENGLISH' });
  }
  displayFrench() {
    this.store.dispatch({ type: 'FRENCH' });
  }
  newVote(postText: string) {
    this.store.dispatch({ type: 'NEWVOTE', playload: postText });
  }
  resetVote() {
    this.store.dispatch({ type: 'RESET' });
  }
  upVote() {
    this.store.dispatch({ type: 'UPVOTE' });
  }
  downVote() {
    this.store.dispatch({ type: 'DOWNVOTE' });
  }
}
export const initialPostState = { text: 'new vote', likes: 0 };
export interface Post {
  text: string;
  likes: number;
}
export class PlayLoadAction implements Action {
  readonly type: string;
  constructor(public playload: Object) {}
}
export function voteReducer(state: Post = initialPostState, action: Action) {
  console.log(state, action.type);
  switch (action.type) {
    case 'UPVOTE':
      return Object.assign({}, state, { likes: state.likes + 1 });
    case 'DOWNVOTE':
      return Object.assign({}, state, { likes: state.likes - 1 });
    case 'NEWVOTE':
      return Object.assign({}, state, { text: ((action as PlayLoadAction).playload as string), likes: 0 });
    case 'RESET':
      return initialPostState;
    default:
      return state;
  }
}
export const initialStateString = 'English Language Selected';
export function simpleReducer(
  state: string = initialStateString,
  action: Action
) {
  console.log(action.type, state);
  switch (action.type) {
    case 'FRENCH':
      return (state = 'French Language Selected');
    case 'ENGLISH':
      return (state = 'English Language Selected');
    default:
      return state;
  }
}
export const reducerMap : ActionReducerMap<AppState> = {lang: simpleReducer, count : voteReducer};

