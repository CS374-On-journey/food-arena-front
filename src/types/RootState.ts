import { UserState } from '../store/user/types';
import { PlacesState } from '../store/place/types';

export interface RootState {
  user?: UserState;
  place?: PlacesState;
}
