module.exports = {
  succeed,
  fail,
  repair,
  get,
};


//returns new item with
//enhancement incresed by one, unchanged if enhancement is at 20.
function succeed(item) {
  if (item.enhancement < 20) {
    return {
      ...item,
      enhancement: item.enhancement + 1
    }
  } else {
    return {
      ...item
    }
  }}

//if item.enhancement < 15, item.durability -5 *if the items enhancementlevel is less than 15
//if item.enhancement >= 15, item.durability -10 * if the enhancement is 15 or more
//if item.enhancement > 16, item.enhancement -1 * if enhancement is more than 16
function fail(item) {
  if (item.enhancement < 15) {
    return {
      ...item,
      durability: item.durability -5
    } 
  } else if (item.enhancement >= 15) {
    return {
      ...item,
      durability: item.durability -10
    }
  } else if (item.enhancement > 16){
    return {
      ...item,
      durability: item.durability -10,
      enhancement: item.enhancement -1
    }
  } 
}

//returns new item with durability restored to 100
function repair(item) {
  return {
    ...item,
    durability: 100,
  };
}



//stretch
function get(item) {
  return { ...item };
}
