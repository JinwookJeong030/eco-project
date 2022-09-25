const sql = require("./db.js");

// 생성자
const Post = function (post) {
    this.post_id =post.post_id
    this.post_user = post.post_user;
    this.post_mission= "임시";
    this.post_category = "임시";
    this.post_title = post.post_title;
    this.post_contents = post.post_contents;
    this.post_regdate = post.post_regdate;
    this.post_update = post.post_update;
    this.post_views = post.post_views;
    this.post_recommand = post.post_recommand;
    this.post_report = post.post_report;
    
  };

  // user 튜플 추가
Post.selectAllPosts = (result) => {
  sql.query('SELECT * FROM post', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('Select All Posts: ',  res );
    result(null,  res );
  });
};
Post.insertPost =(post ,result) =>{

  const postReq = new Post({
    post_user: post.post_user,
    post_title: post.post_title,
    post_contents: post.post_contents, 
  })

  sql.query("INSERT INTO post SET ?",postReq, (err,res)=>{
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('Select All Posts: ',  res);
    result(null,  res);

  });

}
module.exports = Post;
