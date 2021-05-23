import { UserState } from '../store/user/types';
import { PlacesState } from '../store/place/types';
import { PartiesState } from '../store/party/types';
import { GlobalState } from '../store/global/types';
import { MapState } from '../store/map/types';

export interface RootState {
  user?: UserState;
  place?: PlacesState;
  party?: PartiesState;
  global?: GlobalState;
  map?: MapState;
}
