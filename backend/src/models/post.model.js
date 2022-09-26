const sql = require("./db.js");

// 생성자
const Post = function (post) {
    this.post_id =post.post_id
    this.post_user = post.post_user;
    this.post_category = 0;
    this.post_mission = 0;
    this.post_title = post.post_title;
    this.post_contents = post.post_contents;
    this.post_regdate = new Date();
    this.post_update = post.post_update;
    this.post_views = post.post_views;
    this.post_recommand = post.post_recommand;
    this.post_report = post.post_report;
    
  };

  //post 전체 조회
Post.selectAllPosts = (result) => {
  sql.query('SELECT * FROM post ORDER BY post_regdate DESC', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('Select All Posts: ',  res );
    result(null,  res );
  });
};
  //post_id를 통한 post 조회 
Post.selectPostFromId =(post_id,result)=>{
  sql.query('SELECT post.* ,user.user_name FROM post,user WHERE post.post_user =user.user_id AND post.post_id = '+post_id+" ;", (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('Select Post: ',  res[0]);
    result(null,  res[0]);
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
Post.updatePost =(post, result)=>{
  const postReq = new Post({
    post_id: post.post_id,
    post_title: post.post_title,
    post_contents: post.post_contents, 
    post_user: post.post_user,
  })

  sql.query("Update post SET post_title ='"+postReq.post_title+"' , post_contents = '"+postReq.post_contents+"' WHERE post_id = "+postReq.post_id+" AND post_user = "+postReq.post_user+" ;", 
  (err,res)=>{
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('Update Post: ',  res);
    result(null,  res);

  });

}

Post.deletePost =(post, result)=>{
  const postReq = new Post({
    post_id: post.post_id,
    post_user: post.post_user,
  })

  sql.query("DELETE FROM post WHERE post_id = "+postReq.post_id+" AND post_user = "+postReq.post_user+" ;", 
  (err,res)=>{
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('Delete Post: ',  res);
    result(null,  res);

  });

}

module.exports = Post;
