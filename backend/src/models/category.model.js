const sql = require("./db.js");

//생성자
const Category = function (category) {
    this.category_id = category.category_id;
    this.name = category.name;
    this.contents = category.contents;
};