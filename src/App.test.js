const categories = require("./data/category.js");

test("is same", ()=>{
  const keys = Object.keys(categories);

  for (let x of keys) {
      expect(x).toEqual("default");
  }
})