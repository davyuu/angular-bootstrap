import { ErrorObject, User } from '_@api/app';

export interface State {
  model: {
    user: User
  },
  status: {
    authenticated: boolean,
    restored: boolean
    failed: boolean,
    statusCode: boolean,
    errors: Array<ErrorObject>,
  }
}

export const initialState: State = {
  model: {
    user: null
  },
  status: {
    authenticated: false,
    restored: false,
    failed: false,
    statusCode: null,
    errors: []
  }
};
