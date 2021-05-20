export interface IReview {
  author: string;
  content: string;
  rating: number;
  attatchment_urls: string[];
}

export interface IMenu {
  id: number;
  title: string;
  picture_url: string;
  description: string;
  type: string;
  local_title: string;
  local_price: string;
  local_quantity: string;
  children: IMenu[];
}

export interface IPlace {
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
  local_time: string;
  tags: string[];
  rating: number;
  ai_pick: boolean;
  ai_score: number;
  picture: string[];
  reviews: IReview[];
  menus: IMenu[];
}

export interface PlacesState {
  places: IPlace[]
}