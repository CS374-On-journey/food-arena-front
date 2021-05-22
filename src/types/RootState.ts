import { UserState } from '../store/user/types';
import { PlacesState } from '../store/place/types';
import { GlobalState } from '../store/global/types';

export interface RootState {
  user?: UserState;
  place?: PlacesState;
  global?: GlobalState;
}
