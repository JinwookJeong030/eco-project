const sql = require("./db.js");

//생성자
const Category = function (category) {
    this.category_id = category.category_id;
    this.category_name = category.category_name;
    this.category_contents = category.category_contents;
};
module.exports = Category;