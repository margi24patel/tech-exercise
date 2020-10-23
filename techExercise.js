const categories = [
  {
    name: "Accessories",
    id: 1,
    parent_id: 20,
  },
  {
    name: "Watches",
    id: 57,
    parent_id: 1,
  },
  {
    name: "Men",
    id: 20,
    parent_id: null,
  },
];

function sortCategoriesForInsert(inputJson) {
  const idMapping = inputJson.reduce((acc, ele, i) => {
    acc[ele.id] = i;
    return acc;
  }, {});

  let root;
  inputJson.forEach((ele) => {
    if (ele.parent_id === null) {
      root = ele;
      return;
    }
    const parentEle = inputJson[idMapping[ele.parent_id]];

    parentEle.children = [...(parentEle.children || []), ele];
  });

  //console.log("ROOT", root);
}

module.exports = sortCategoriesForInsert(categories);
