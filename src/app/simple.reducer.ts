import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello world!', action: Action) {
  console.log(action.type, state);
  switch (action.type) {
    case 'FRENCH':
      return state = 'Bonjour le monde!';
    case 'ENGLISH':
      return state = 'Hello World!';
    default:
      return state;
  }
}
