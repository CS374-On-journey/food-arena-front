import { rs } from '../place/restaurants';

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
    "title": getTitle(rs[0].menus[0].title),
    "res_id": 1,
    "menu":rs[0].menus[0].title,
    "description":"We plan to eat "+rs[0].menus[0].title+" at "+ rs[0].name +".",
    "maxpeople":5,
    "tags": getTag(rs[0].tags)
  },
  {
    "title": getTitle(rs[1].menus[0].title),
    "res_id":2,
    "menu":rs[1].menus[0].title,
    "description":"We plan to eat "+rs[1].menus[0].title+" at "+ rs[1].name +".",
    "maxpeople":4,
    "tags":getTag(rs[1].tags)
  },
  {
    "title": getTitle(rs[1].menus[1].title),
    "res_id":2,
    "menu":rs[1].menus[1].title,
    "description":"We plan to eat "+rs[1].menus[1].title+" at "+ rs[1].name +".",
    "maxpeople":4,
    "tags":getTag(rs[1].tags)
  },
  {
    "title": getTitle(rs[2].menus[0].title),
    "res_id":3,
    "menu":"We plan to eat "+rs[2].menus[0].title+" at "+ rs[2].name +".",
    "description":"",
    "maxpeople":4,
    "tags":getTag(rs[2].tags)
  },
  {
    "title": getTitle(rs[3].menus[0].title),
    "res_id": 4,
    "menu":rs[3].menus[0].title,
    "description":"We plan to eat "+rs[3].menus[0].title+" at "+ rs[3].name +".",
    "maxpeople":3,
    "tags": getTag(rs[3].tags)
  },
  {
    "title": getTitle(rs[3].menus[1].title),
    "res_id":4,
    "menu":"We plan to eat "+rs[3].menus[1].title+" at "+ rs[3].name +".",
    "description":"",
    "maxpeople":4,
    "tags":getTag(rs[3].tags)
  },
  {
    "title": getTitle(rs[4].menus[0].title),
    "res_id":5,
    "menu":"We plan to eat "+rs[4].menus[0].title+" at "+ rs[4].name +".",
    "description":"",
    "maxpeople":4,
    "tags":getTag(rs[4].tags)
  },
  {
    "title": getTitle(rs[5].menus[0].title),
    "res_id":6,
    "menu":"We plan to eat "+rs[5].menus[0].title+" at "+ rs[5].name +".",
    "description":"",
    "maxpeople":4,
    "tags":getTag(rs[5].tags)
  },
  {
    "title": getTitle(rs[5].menus[1].title),
    "res_id":6,
    "menu":"We plan to eat "+rs[5].menus[1].title+" at "+ rs[5].name +".",
    "description":"",
    "maxpeople":3,
    "tags":getTag(rs[5].tags)
  },
  {
    "title": getTitle(rs[6].menus[1].title),
    "res_id":7,
    "menu":rs[6].menus[1].title,
    "description":"We plan to eat "+rs[6].menus[1].title+" at "+ rs[6].name +".",
    "maxpeople":3,
    "tags":getTag(rs[6].tags)
  }
]