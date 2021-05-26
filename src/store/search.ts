import { keyword } from "chalk";
import { IParty, isInstanceOfParty, PartiesState } from "./party/types";
import { generated_places } from "./place";
import { IPlace } from "./place/types";

const filter = (x?:string) => x?.trim().toLowerCase().replaceAll('\n', '')

const hasKeyString = (x:string, key:string[]) => {
    let found = 0;
    for(const k of key) found += (filter(x)?.indexOf(k) ?? -1) >= 0 ? 1 : 0;
    return found;
}

const scoreParty = (x:IParty, key:string[]):number => {
    let score = 0;
    score += hasKeyString(x.title, key) * 100;
    score += hasKeyString(x.description, key) * 50;
    score += hasKeyString(x.menu_text, key) * 50;
    let place = generated_places.filter((item, idx, arr) => item.id == x.restaurant_id)[0] as IPlace;
    if(place){
        let place_score = scorePlace(place, key);
        console.log(place_score, place)
        score += place_score
    }
    return score;
}

const scorePlace = (x:IPlace, key:string[]):number => {
    let score = 0;
    score += hasKeyString(x.name, key) * 100;
    score += hasKeyString(x.address.readable, key) * 50;
    for(const t of x.tags) score += hasKeyString(t, key) * 50;
    for(const r of x.reviews) score += hasKeyString(r.content, key) * 10;
    return score;
}

interface SearchItem {
    search_score: number;
    visible: boolean;
}

export function searchItems(s:SearchItem[], term:string){
    let mean = 0;
    let keywords = filter(term)?.split(' ')
    for(let i=0; i<s.length; i++)
    {
        let item = s[i];
        let score;
        if(keywords == null || keywords == undefined){
            score = 0;
        }
        else if('title' in item){
            score = scoreParty(item as IParty, keywords);
        }else{
            score = scorePlace(item as IPlace, keywords);
        }
        item.search_score = score;
        mean += score;
    }
    mean /= s.length;
    for(let i=0; i<s.length; i++)
    {
        let item = s[i];
        item.visible = item.search_score >= mean;
    }
}