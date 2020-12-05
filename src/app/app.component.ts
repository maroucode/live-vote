import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './vote.state';
import { UPVOTE, NEWVOTE, RESET, DOWNVOTE } from './vote.actions';
import { voteReducer } from './vote.reducer';

interface AppState {
  message: string;
}

interface VoteState {
  vote: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message$: Observable<String>;
  postText: string;
  vote: Observable<Post>;

  constructor(
    private store: Store<AppState>,
    private voteStore: Store<VoteState>
  ) {
    this.vote = this.voteStore.select('vote');
    this.message$ = this.store.select('message');
  }
  displayEnglish() {
    this.store.dispatch({ type: 'ENGLISH' });
  }
  displayFrench() {
    this.store.dispatch({ type: 'FRENCH' });
  }
  newVote(postText: string) {
    this.voteStore.dispatch(new NEWVOTE(postText));
  }
  resetVote() {
    this.voteStore.dispatch(new RESET());
  }
  upVote() {
    this.voteStore.dispatch(new UPVOTE());
  }
  downVote() {
    this.voteStore.dispatch(new DOWNVOTE());
  }
}
