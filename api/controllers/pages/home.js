module.exports = async (req, res) => {

  const posts = await Post.find();

  res.view('pages/posts/posts', { posts });
};
