export interface IReview {
  author: string;
  content: string;
  rating: number;
  attachment_urls: string[];
}

export interface IMenu {
  id: number;
  title: string;
  picture_url: string;
  description: string;
  type: string;
  local_title: string;
  local_price: number;
  local_currency: string;
  local_quantity: number;
  local_quantity_unit: string;

  local_format_price_per_unit: string;
  local_format_quantity:string;
  local_format_price:string;
  children: IMenu[];
  isExpanded:boolean;
  label: any;
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
  picture_urls: string[];
  
  reviews: IReview[];
  
  menus: IMenu[];

  submenu_opened: boolean;
  submenu_selected: boolean;

  visible:boolean,
  search_score: number,
}

export function isInstanceOfPlace(object:any)
{
  return 'address' in object && 'submenu_opened' in object && 'reviews' in object && 'name' in object
}

export interface PlacesState {
  places: IPlace[],
  search_term:string,
  menu_viewer_opened: boolean,
}