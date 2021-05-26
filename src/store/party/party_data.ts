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

export var nums = 40
export var parties_data = new Array();
for(var i=1;i<=10;i++){
  parties_data.push({
    "title": getTitle(restaurants[i].menus[0].title),
    "res_id": i,
    "menu":restaurants[i].menus[0].title,
    "description":"We plan to eat "+restaurants[i].menus[0].title+" at "+ restaurants[i].name +".",
    "maxpeople":3,
    "tags": getTag(restaurants[0].tags)
  })
  parties_data.push({
    "title": getTitle(restaurants[i].menus[1].title),
    "res_id": i,
    "menu":restaurants[i].menus[1].title,
    "description":"We plan to eat "+restaurants[i].menus[1].title+" at "+ restaurants[i].name +".",
    "maxpeople":4,
    "tags":getTag(restaurants[i].tags)
  })
parties_data.push({
  "title": getTitle(restaurants[i].menus[0].title),
  "res_id": i,
  "menu":restaurants[i].menus[0].title,
  "description":"We plan to eat "+restaurants[i].menus[0].title+" at "+ restaurants[i].name +".",
  "maxpeople":3,
  "tags": getTag(restaurants[0].tags)
})
parties_data.push({
  "title": getTitle(restaurants[i].menus[1].title),
  "res_id": i,
  "menu":restaurants[i].menus[1].title,
  "description":"We plan to eat "+restaurants[i].menus[1].title+" at "+ restaurants[i].name +".",
  "maxpeople":4,
  "tags":getTag(restaurants[i].tags)
})
}