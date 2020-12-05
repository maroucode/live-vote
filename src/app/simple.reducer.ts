import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'English Language Selected', action: Action) {
  console.log(action.type, state);
  switch (action.type) {
    case 'FRENCH':
      return state = 'French Language Selected';
    case 'ENGLISH':
      return state = 'English Language Selected';
    default:
      return state;
  }
}
