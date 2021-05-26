export interface IParty {
  id: number;
  title: string;
  restaurant_id: number;
  is_registered: boolean;

  meeting_date: string,
  due_date: string,

  tags: string[],
  menu_text: string,
  description: string,
  
  registered_people: number,
  max_people: number,

  ban_rules: string[],

  visible:boolean,
  search_score: number,
}

export function isInstanceOfParty(object:any)
{
  return 'max_peole' in object && 'ban_rules' in object && 'restaurant_id' in object
}

export interface PartiesState {
  search_term: string,
  parties: IParty[]
}