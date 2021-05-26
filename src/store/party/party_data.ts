import { restaurants } from '../place/restaurants';

var taglist = [
  ["Korean","Spciy"],
  ["Affordable","Fast"],
  ["Luxurious","Atmosphere"],
  ["View","Pork"]
]

function getTitle(name){
  var ret = ""
  var idx  = Math.floor(Math.random()*5)
  if(idx==0){
    return "Let's eat "+ name + " together!"
  }
  else if(idx==1){
    return "We want to eat " + name +"!"
  }
  else if(idx==2){
    return name+" Lovers"
  }
  else if(idx==3){
    return "We came Japan to eat "+name
  }
  else if(idx==4){
    return "Best "+name+" forever"
  }
}

function getTwoNums(){
  var one = Math.floor(Math.random()*4);
  var two = Math.floor(Math.random()*4);
  if(one==two){
    if(one==0){
      two=3
    }
    else{
      two=0
    }
  }
  return [one, two]
}
function getTag(tags){
  var arr = tags.concat(taglist[Math.floor(Math.random()*4)]);
  var two = getTwoNums();
  return [arr[two[0]], arr[two[1]]]
}

export var nums = 10
export var parties_data = [
  {
    "title": getTitle(restaurants[0].menus[0].title),
    "res_id": 1,
    "menu":restaurants[0].menus[0].title,
    "description":"We plan to eat "+restaurants[0].menus[0].title+" at "+ restaurants[0].name +".",
    "maxpeople":5,
    "tags": getTag(restaurants[0].tags)
  },
  {
    "title": getTitle(restaurants[1].menus[0].title),
    "res_id":2,
    "menu":restaurants[1].menus[0].title,
    "description":"We plan to eat "+restaurants[1].menus[0].title+" at "+ restaurants[1].name +".",
    "maxpeople":4,
    "tags":getTag(restaurants[1].tags)
  },
  {
    "title": getTitle(restaurants[1].menus[1].title),
    "res_id":2,
    "menu":restaurants[1].menus[1].title,
    "description":"We plan to eat "+restaurants[1].menus[1].title+" at "+ restaurants[1].name +".",
    "maxpeople":4,
    "tags":getTag(restaurants[1].tags)
  },
  {
    "title": getTitle(restaurants[2].menus[0].title),
    "res_id":3,
    "menu":"We plan to eat "+restaurants[2].menus[0].title+" at "+ restaurants[2].name +".",
    "description":"",
    "maxpeople":4,
    "tags":getTag(restaurants[2].tags)
  },
  {
    "title": getTitle(restaurants[3].menus[0].title),
    "res_id": 4,
    "menu":restaurants[3].menus[0].title,
    "description":"We plan to eat "+restaurants[3].menus[0].title+" at "+ restaurants[3].name +".",
    "maxpeople":3,
    "tags": getTag(restaurants[3].tags)
  },
  {
    "title": getTitle(restaurants[3].menus[1].title),
    "res_id":4,
    "menu":"We plan to eat "+restaurants[3].menus[1].title+" at "+ restaurants[3].name +".",
    "description":"",
    "maxpeople":4,
    "tags":getTag(restaurants[3].tags)
  },
  {
    "title": getTitle(restaurants[4].menus[0].title),
    "res_id":5,
    "menu":"We plan to eat "+restaurants[4].menus[0].title+" at "+ restaurants[4].name +".",
    "description":"",
    "maxpeople":4,
    "tags":getTag(restaurants[4].tags)
  },
  {
    "title": getTitle(restaurants[5].menus[0].title),
    "res_id":6,
    "menu":"We plan to eat "+restaurants[5].menus[0].title+" at "+ restaurants[5].name +".",
    "description":"",
    "maxpeople":4,
    "tags":getTag(restaurants[5].tags)
  },
  {
    "title": getTitle(restaurants[5].menus[1].title),
    "res_id":6,
    "menu":"We plan to eat "+restaurants[5].menus[1].title+" at "+ restaurants[5].name +".",
    "description":"",
    "maxpeople":3,
    "tags":getTag(restaurants[5].tags)
  },
  {
    "title": getTitle(restaurants[6].menus[1].title),
    "res_id":7,
    "menu":restaurants[6].menus[1].title,
    "description":"We plan to eat "+restaurants[6].menus[1].title+" at "+ restaurants[6].name +".",
    "maxpeople":3,
    "tags":getTag(restaurants[6].tags)
  }
]