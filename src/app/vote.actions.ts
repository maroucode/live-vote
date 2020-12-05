import { Action } from '@ngrx/store';

export class UPVOTE implements Action {
  readonly type = 'UPVOTE';
}
export class DOWNVOTE implements Action {
  readonly type = 'DOWNVOTE';
}
export class RESET implements Action {
  readonly type = 'RESET';
}
export class NEWVOTE implements Action {
  readonly type = 'NEWVOTE';
  constructor(public playload : string ) {}
}
export type ALL = UPVOTE | DOWNVOTE | RESET |NEWVOTE;