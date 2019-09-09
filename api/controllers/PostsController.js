
module.exports = {

  // create a new post
  create: async (req, res) => {
    const { title, body } = { title: req.body.title, body: req.body.body };
    try {
      await Post.create({ title, body });
      res.send(`post successfully created!`);
    } catch (err) {
      return res.serverError(err.toString());
    }
  },

  // get all posts
  posts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.send(posts);
    } catch (err) {
      return res.serverError(err.toString());
    }
  },

  // get a post by ID
  post: async (req, res) => {
    try {
      const id = req.param('id');
      const post = await Post.findOne(id);
      res.send(post);
    } catch (err) {
      return res.serverError(err.toString());
    }
  },

  // delete a post
  delete: async (req, res) => {
    try {
      const id = req.param('id');
      await Post.destroy({ id });
      res.send(`post ${id} was successfully deleted!`);
    } catch (err) {
      return res.serverError(err.toString());
    }
  }

};
