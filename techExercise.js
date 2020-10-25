const categories = [
  {
    "name": "Accessories",
    "id": 1,
    "parent_id": 20,
  },
  {
    "name": "Watches",
    "id": 57,
    "parent_id": 1
  },
  {
    "name": "Men",
    "id": 20,
    "parent_id": null,
  }
];

function sortCategoriesForInsert(inputJson) {
  const idMapping = inputJson.reduce((acc, ele, i) => {
    acc[ele.id] = i;
    return acc;
  }, {});

  let root;
  let arr = [];
  inputJson.forEach((ele) => {
    if (ele.parent_id === null) {
      root = ele;
      arr.push(root);
      // console.log("ROOT", root)
      return;
    }
    const parentEle = inputJson[idMapping[ele.parent_id]];
    // console.log("PARENT", parentEle);
    // console.log("ELEMENT", ele);
    arr.push(parentEle, ele);
  });

  const properJsonOutput = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  // console.log(JSON.stringify(properJsonOutput, null, 2));
  return JSON.stringify(properJsonOutput, null, 2);
}

module.exports = sortCategoriesForInsert(categories);
