export interface ILocation {
  latitude: number,
  longitude: number,
}

export interface MapState {
  center: ILocation | null;
}