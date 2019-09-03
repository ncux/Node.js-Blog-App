
const post_1 = { id: 1, title: 'title_1', body: 'body_1' };
const post_2 = { id: 2, title: 'title_2', body: 'body_2' };
const post_3 = { id: 3, title: 'title_3', body: 'body_3' };

const Posts = [post_2, post_1, post_3];


module.exports = {

  create: function(req, res) {
    const post_4 = { id: Posts.length+1, title: req.param('title'), body: req.param('body') };
    Posts.push(post_4);
    res.send(Posts);
  },

  posts: function (req, res) {
    res.send(Posts);
  },

  post: function (req, res) {
    const id = req.param('id');
    const posts = Posts.filter(post => post.id == id);
    if(posts.length > 0) {
      res.send(posts[0]);
    } else {
      res.status(400).send(`Post with ID ${id} wasn't found!`);
    }
  }

};
