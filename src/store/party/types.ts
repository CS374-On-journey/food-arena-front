export interface IParty {
  id: number;
  title: string;
  restaurant: string;
  address: {
    longitude: number;
    latitude: number;
    readable: string;
  }
  meeting_date: string,
  due_date: string,
  tags: string[],
  description: string,
  registered_people: number,
  max_people: number,
  ban_rules: string[];
}

export interface PartiesState {
  parties: IParty[]
}