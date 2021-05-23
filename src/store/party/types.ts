export interface IParty {
  id: number;
  title: string;
  restaurant_id: number;

  meeting_date: string,
  due_date: string,

  tags: string[],
  menu_text: string,
  description: string,
  
  registered_people: number,
  max_people: number,

  ban_rules: string[],
}

export interface PartiesState {
  parties: IParty[]
}