import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoryState = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { data: [], loading: true, error: null };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default repositoriesReducer;
