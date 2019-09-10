module.exports = async (req, res) => {
  try {
    const id = req.param('id');
    const post = await Post.findOne(id);
    res.view('pages/posts/post-edit', { post });
  } catch (err) {
    return res.serverError(err.toString());
  }
};
