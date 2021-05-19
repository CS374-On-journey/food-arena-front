interface IPlace {
  id: number;
  name: string;
  address: {
    longitude: number;
    latitude: number;
    readable: string;
  }
  distance: number;
  travel_time: number;
  waiting_time: number;
  open_time: string;
  close_time: string;
  rating: number;
  ai_pick: boolean;
  ai_score: number;
  picture: string[];
  reviews: object[];
}

export interface PlacesState {
  places: IPlace[]
}